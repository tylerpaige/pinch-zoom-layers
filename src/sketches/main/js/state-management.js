import { THRESHOLD_FACTOR } from './constants';

const getDefault = (els) => {
  const bb = els.root.getBoundingClientRect();
  const minorAxis = Math.min(bb.width, bb.height);
  const zoomThreshold = minorAxis * THRESHOLD_FACTOR;
  return {
    zoomThreshold,
    pinchAmount : 0,
    activeLayerIndex : els.layers.length - 1,
    startingDistance : 0,
    triggerHintIsVisible : false
  };
};

const reset = (state) => {
  state.pinchAmount = 0;
  state.startingDistance = 0;
};

export {
  getDefault,
  reset
}