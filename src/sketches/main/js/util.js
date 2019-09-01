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

export {
  touchesToDistance,
  calculateDistance,
  getNextLayerIndex,
  getElements
}