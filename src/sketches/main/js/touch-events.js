import * as ux from './interaction-handlers';
import * as stateMgmt from './state-management';
import { PINCH_THRESHOLD } from './constants';
import { touchesToDistance, getNextLayerIndex } from './util';

const handlePointerDown = (state, els, e) => {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  const activeLayer = els.layers[state.activeLayerIndex];
  ux.startPinchZoom(activeLayer);

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

const handlePinch = (pinchAmount, state, els) => {
  // As user pinches, the top-most layer should grow and fade out
  // but not completely
  const activeLayer = els.layers[state.activeLayerIndex];
  ux.pinchZoom(activeLayer, pinchAmount);
  if (pinchAmount >= PINCH_THRESHOLD && !state.triggerHintIsVisible) {
    ux.showTriggerHint(activeLayer);
    state.triggerHintIsVisible = true;
  } else if (pinchAmount < PINCH_THRESHOLD && state.triggerHintIsVisible) {
    ux.hideTriggerHint(activeLayer);
    state.triggerHintIsVisible = false;
  }
};

const handlePointerUp = (state, els, e) => {
  // if distance is above zoomThreshold, trigger
  // a layer switch
  const activeLayer = els.layers[state.activeLayerIndex];
  const nextLayerIndex = getNextLayerIndex(els.layers, state.activeLayerIndex);
  const nextLayer = els.layers[nextLayerIndex];

  ux.endPinchZoom(activeLayer);

  if (state.pinchAmount >= PINCH_THRESHOLD) {
    ux.zoomIn(activeLayer);
    state.activeLayerIndex = nextLayerIndex;
  } else {
    ux.cancelZoom(activeLayer);
  }

  stateMgmt.reset(state);
};

export {
  handlePointerDown,
  handlePointerMove,
  handlePointerUp
}