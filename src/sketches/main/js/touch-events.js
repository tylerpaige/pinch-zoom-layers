import * as ux from './interaction-handlers';
import * as stateMgmt from './state-management';
import { PINCH_THRESHOLD } from './constants';
import { touchesToDistance, getNextLayerIndex } from './util';
import clamp from '../../../util/clamp';

const handlePointerDown = (state, block, e) => {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  ux.startPinchZoom(block);
  const zoomManifest = ux.getZoomManifest(block);

  const distance = touchesToDistance(e.touches);
  state.startingDistance = distance;
  state.zoomManifest = zoomManifest;
}

const handlePointerMove = (state, block, e) => {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  const distance = touchesToDistance(e.touches);
  const distanceDelta = distance - state.startingDistance;
  const pinchAmount = clamp(distanceDelta / state.zoomThreshold, 0, 1);
  
  if (distance != state.distance) {
    handlePinch(pinchAmount, state, block);
  }

  state.pinchAmount = pinchAmount;
  return state;
};

const handlePinch = (pinchAmount, state, block) => {
  // As user pinches, the top-most layer should grow and fade out
  // but not completely
  ux.pinchZoom(block, pinchAmount, state.zoomManifest);
  if (pinchAmount >= PINCH_THRESHOLD && !state.triggerHintIsVisible) {
    ux.showTriggerHint(block);
    state.triggerHintIsVisible = true;
  } else if (pinchAmount < PINCH_THRESHOLD && state.triggerHintIsVisible) {
    ux.hideTriggerHint(block);
    state.triggerHintIsVisible = false;
  }
};

const handlePointerUp = (state, block, e) => {
  if (state.isHandlingPointerUp) {
    return;
  }
  state.isHandlingPointerUp = true;
  ux.endPinchZoom(block);

  if (state.pinchAmount >= PINCH_THRESHOLD) {
    ux.zoomIn(block, state.zoomManifest);
  } else {
    ux.cancelZoom(block, state.zoomManifest);
  }

  stateMgmt.reset(state);
  setTimeout(() => {
    state.isHandlingPointerUp = false;
  }, 500);
};

export {
  handlePointerDown,
  handlePointerMove,
  handlePointerUp
}