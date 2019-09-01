import '../css/styles.scss';
import clamp from '../../../util/clamp';

const LIMINAL_MAX_SCALE = 1.5;
const LIMINAL_MIN_OPACITY = 0.5;
const THRESHOLD_FACTOR = 0.66;
const PINCH_THRESHOLD = 1;

const getDefaultState = (els) => {
  const bb = els.root.getBoundingClientRect();
  const minorAxis = Math.min(bb.width, bb.height);
  // REVIEW: some sort of smarter calculation here?
  const zoomThreshold = minorAxis * THRESHOLD_FACTOR;
  return {
    zoomThreshold,
    pinchAmount : 0,
    activeLayerIndex : els.layers.length - 1,
    startingDistance : 0
  };
};

const reset = (state) => {
  state.pinchAmount = 0;
  state.startingDistance = 0;
};

const touchesToDistance = (touches) => {
  const pos1 = [touches[0].clientX, touches[0].clientY];
  const pos2 = [touches[1].clientX, touches[1].clientY];
  return calculateDistance(pos1, pos2);
}

const calculateDistance = (pos1, pos2) => {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;

  const a = Math.abs(x2 - x1);
  const b = Math.abs(y2 - y1);

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

const handlePointerDown = (state, els, e) => {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  const distance = touchesToDistance(e.touches);
  state.startingDistance = distance;
}

const handlePointerMove = (state, els, e) => {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  const distance = touchesToDistance(e.touches);
  const distanceDelta = distance - state.startingDistance;
  const pinchAmount = distanceDelta / state.zoomThreshold;
  
  if (distance != state.distance) {
    handlePinch(pinchAmount, state, els);
  }

  state.pinchAmount = pinchAmount;
  return state;
};

const handlePointerUp = (state, els, e) => {
  // if distance is above zoomThreshold, trigger
  // a layer switch
  const activeLayer = els.layers[state.activeLayerIndex];
  const nextLayerIndex = getNextLayerIndex(els.layers, state.activeLayerIndex);
  const nextLayer = els.layers[nextLayerIndex];

  if (state.pinchAmount >= PINCH_THRESHOLD) {
    activeLayer.classList.add('is-exiting');
    state.activeLayerIndex = nextLayerIndex;
    document.documentElement.classList.remove('will-exit');
  } else {
    activeLayer.classList.add('is-resetting');
    activeLayer.style.opacity = 1;
    activeLayer.style.transform = 'scale(1)';
    setTimeout(() => {
      activeLayer.classList.remove('is-resetting');
    }, 200);
  }

  reset(state);
};

const handlePinch = (pinchAmount, state, els) => {
  // As user pinches, the top-most layer should grow and fade out
  // but not completely
  const activeLayer = els.layers[state.activeLayerIndex];
  const scale = pinchAmount * (LIMINAL_MAX_SCALE - 1) + 1;
  const opacity = 1 - (pinchAmount * (1 - LIMINAL_MIN_OPACITY));
  console.log(`pinch amount: ${pinchAmount}; scale: ${scale}`);
  activeLayer.style.transform = `scale(${scale})`;
  activeLayer.style.opacity = opacity;
  if (pinchAmount >= PINCH_THRESHOLD) {
    activeLayer.classList.add('will-exit');
    document.documentElement.classList.add('will-exit');
  } else if (pinchAmount < PINCH_THRESHOLD && activeLayer.classList.contains('will-exit')) {
    activeLayer.classList.remove('will-exit');
    document.documentElement.classList.remove('will-exit');
  }
};

const getNextLayerIndex = (layers, activeIndex) => { 
  return activeIndex > 0 ? (activeIndex - 1) : (layers.length - 1);
};

const getElements = (root) => {
  const layers = root.querySelectorAll('.layer');
  return {
    root,
    layers
  };
};

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);
  const state = getDefaultState(els);

  root.addEventListener('touchstart', handlePointerDown.bind(this, state, els));
  root.addEventListener('touchmove', handlePointerMove.bind(this, state, els));
  root.addEventListener('touchend', handlePointerUp.bind(this, state, els));
};

document.addEventListener('DOMContentLoaded', init);