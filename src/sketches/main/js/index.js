import '../css/styles.scss';
import { getElements } from './util';
import * as stateMgmt from './state-management';
import * as events from './touch-events';

const positionChildBlock = (block) => {
  const blockBB = block.container.getBoundingClientRect();
  /*
    By default, child is aligned to top of of block. When
    we start zooming, though, it should be centered. And
  */
  const top = blockBB.top < 0 ? 0 : blockBB.top;
  const bottom = (blockBB.top + blockBB.height) > window.innerHeight
    ? window.innerHeight : (blockBB.top + blockBB.height);
  const translateYStart = (bottom - top) / 2;
  block.child.style.transform = `translateY(${translateYStart})`;
}

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);

  els.blocks.forEach((block, index) => {
    block.body.addEventListener('touchStart', e => {
      positionChildBlock(block);
    });
  });

  // root.addEventListener('touchstart', events.handlePointerDown.bind(this, state, els));
  // root.addEventListener('touchmove', events.handlePointerMove.bind(this, state, els));
  // root.addEventListener('touchend', events.handlePointerUp.bind(this, state, els));
};

document.addEventListener('DOMContentLoaded', init);