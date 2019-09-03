const touchesToDistance = touches => {
  const pos1 = [touches[0].clientX, touches[0].clientY];
  const pos2 = [touches[1].clientX, touches[1].clientY];
  return calculateDistance(pos1, pos2);
};

const calculateDistance = (pos1, pos2) => {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;

  const a = Math.abs(x2 - x1);
  const b = Math.abs(y2 - y1);

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

const getNextLayerIndex = (layers, activeIndex) => {
  return activeIndex > 0 ? activeIndex - 1 : layers.length - 1;
};

const getElements = root => {
  const blocksWithChildren = root.querySelectorAll(".block--has-child");
  const blocks = Array.prototype.slice
    .call(blocksWithChildren, 0)
    .reduce((acc, block) => {
      const body = block.querySelector(".block__content");
      const child = block.querySelector(".block");
      return acc.concat([{
        body,
        child,
        container: block
      }]);
    }, []);
  return {
    root,
    blocks
  };
};

export { touchesToDistance, calculateDistance, getNextLayerIndex, getElements };
