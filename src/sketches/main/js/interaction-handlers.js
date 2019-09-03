import { LIMINAL_MAX_SCALE, LIMINAL_MIN_OPACITY } from "./constants";

const showTriggerHint = block => {
  block.container.classList.add("will-zoom-in");
  document.documentElement.classList.add("will-zoom-in");
};

const hideTriggerHint = block => {
  block.container.classList.remove("will-zoom-in");
  document.documentElement.classList.remove("will-zoom-in");
};

const startPinchZoom = block => {
  block.container.classList.add("is-zooming");
};

const endPinchZoom = block => {
  block.container.classList.remove("is-zooming");
};

const getZoomManifest = block => {
  const blockBB = block.container.getBoundingClientRect();
  const top = blockBB.top < 0 ? 0 : blockBB.top;
  const bottom =
    blockBB.top + blockBB.height > window.innerHeight
      ? window.innerHeight
      : blockBB.top + blockBB.height;
  const translateYStart = (bottom - top) / 2;
  block.child.style.transform = `translateY(${translateYStart}) scale(0)`;
  const translateYEnd = -1 * top;
  return {
    translateYStart,
    translateYEnd
  };
};

const pinchZoom = (block, pinchAmount, zoomManifest) => {
  // const opacity = 1 - (pinchAmount * (1 - LIMINAL_MIN_OPACITY));
  const scale = pinchAmount;
  const translation =
    (zoomManifest.translateYEnd - zoomManifest.translateYStart) * pinchAmount +
    zoomManifest.translateYStart;
  block.child.style.transform = `scale(${scale}) translateY(${translation}px)`;
  // block.child.style.opacity = opacity;
};

const zoomIn = (block, zoomManifest) => {
  console.log('zoom in');
  document.documentElement.classList.remove("will-zoom-in");
  document.documentElement.classList.add('has-zoomed-in');
  block.child.style.transform = `scale(1) translateY(${zoomManifest.translateYEnd}px)`;
  block.child.classList.add('is-active');
  block.child.style.transform = 'none';
};

const cancelZoom = block => {
  console.log('cancel zoom');
  block.container.classList.add("is-resetting");
  block.child.style.opacity = 1;
  block.child.style.transform = "scale(0)";
  setTimeout(() => {
    block.container.classList.remove("is-resetting");
  }, 200);
};

export {
  showTriggerHint,
  hideTriggerHint,
  pinchZoom,
  zoomIn,
  cancelZoom,
  startPinchZoom,
  endPinchZoom,
  getZoomManifest
};
