import '../css/styles.scss';
import { getElements } from './util';
import * as stateMgmt from './state-management';
import * as events from './touch-events';

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);
  const state = stateMgmt.getDefault(els);

  els.blocks.forEach((block, index) => {
    block.body.addEventListener('touchstart', events.handlePointerDown.bind(this, state, block));
    block.body.addEventListener('touchmove', events.handlePointerMove.bind(this, state, block));
    block.body.addEventListener('touchend', events.handlePointerUp.bind(this, state, block));
  });
};

document.addEventListener('DOMContentLoaded', init);