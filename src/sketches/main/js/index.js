import '../css/styles.scss';
import clamp from '../../../util/clamp';

const LIMINAL_MAX_SCALE = 3;
const LIMINAL_MIN_OPACITY = 0.33;
const THRESHOLD_FACTOR = 0.75;

const getDefaultState = (root) => {
  const bb = root.getBoundingClientRect();
  const minorAxis = Math.min(bb.width, bb.height);
  // REVIEW: some sort of smarter calculation here?
  const zoomThreshold = minorAxis * THRESHOLD_FACTOR;
  return {
    zoomThreshold,
    distance : 0,
    activeLayerIndex : 0
  };
};

const reset = (state) => {
  state.distance = 0;
};

const calculateDistance = (pos1, pos2) => {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;

  const a = Math.abs(x2 - x1);
  const b = Math.abs(y2 - y1);

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

const handlePointerMove = (state, els, e) => {
  if (e.touches.length < 2) {
    return;
  }

  const pos1 = [e.touches[0].clientX, e.touches[0].clientY];
  const pos2 = [e.touches[1].clientX, e.touches[1].clientY];
  const distance = calculateDistance(pos1, pos2);
  
  if (distance != state.distance) {
    handlePinch(distance, state, els);
  }

  state.distance = distance;
  return state;
};

const handlePointerUp = (state, els, e) => {
  // if distance is above zoomThreshold, trigger
  // a layer switch
  const activeLayer = els.layers[state.activeLayerIndex];
  const nextLayerIndex = getNextLayerIndex(els.layers, state.activeLayerIndex);
  const nextLayer = els.layers[nextLayerIndex];
  if (state.distance > state.zoomThreshold) {
    activeLayer.classList.add('is-exiting');
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

const handlePinch = (distance, state, els) => {
  const isZoomingIn = distance > state.distance;
  const pinchAmount = clamp(distance / state.zoomThreshold, 0, 1);
  console.log(`Distance: ${distance}; Pinch: ${pinchAmount}`);
  
  // As user pinches, the top-most layer should grow and fade out
  // but not completely
  const activeLayer = els.layers[state.activeLayerIndex];
  const scale = pinchAmount * LIMINAL_MAX_SCALE;
  const opacity = 1 - (pinchAmount * (1 - LIMINAL_MIN_OPACITY));
  activeLayer.style.transform = `scale(${scale})`;
  activeLayer.style.opacity = opacity;
};

const getNextLayerIndex = (layers, activeIndex) => { 
  return layers[activeIndex + 1] ? activeIndex + 1 : 0;
};

const getElements = (root) => {
  const layers = root.querySelectorAll('.layer');
  return {
    layers
  };
};

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);
  const state = getDefaultState(root);
  console.log(els, state);

  root.addEventListener('touchmove', handlePointerMove.bind(this, state, els));
  root.addEventListener('touchend', handlePointerUp.bind(this, state, els));
};

document.addEventListener('DOMContentLoaded', init);