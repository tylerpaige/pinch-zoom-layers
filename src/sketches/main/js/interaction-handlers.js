import { LIMINAL_MAX_SCALE, LIMINAL_MIN_OPACITY } from './constants';

const showTriggerHint = (layer) => {
  layer.classList.add('will-exit');
  document.documentElement.classList.add('will-exit');
};

const hideTriggerHint = (layer) => {
  layer.classList.remove('will-exit');
  document.documentElement.classList.remove('will-exit');
};

const startPinchZoom = (layer) => {
  layer.classList.add('is-zooming');
};

const endPinchZoom = (layer) => {
  layer.classList.remove('is-zooming');
};

const pinchZoom = (layer, pinchAmount) => {
  const scale = pinchAmount * (LIMINAL_MAX_SCALE - 1) + 1;
  const opacity = 1 - (pinchAmount * (1 - LIMINAL_MIN_OPACITY));
  layer.style.transform = `scale(${scale})`;
  layer.style.opacity = opacity;
};

const zoomIn = (layer) => {
  document.documentElement.classList.remove('will-exit');
  document.documentElement.classList.add('is-exiting');
  layer.classList.add('is-exiting');
};

const cancelZoom = (layer) => {
  layer.classList.add('is-resetting');
  layer.style.opacity = 1;
  layer.style.transform = 'scale(1)';
  setTimeout(() => {
    layer.classList.remove('is-resetting');
  }, 200);
};

export {
  showTriggerHint,
  hideTriggerHint,
  pinchZoom,
  zoomIn,
  cancelZoom,
  startPinchZoom,
  endPinchZoom
};