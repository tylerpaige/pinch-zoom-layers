import '../css/styles.scss';
import { getElements } from './util';
import * as stateMgmt from './state-management';
import * as touchEvents from './touch-events';
import * as scrollEvents from './scroll-events';
import * as ux from './interaction-handlers';

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);
  const state = stateMgmt.getDefault(els);

  els.blocks.forEach((block, index) => {
    block.body.addEventListener('touchstart', touchEvents.handlePointerDown.bind(this, state, block));
    block.body.addEventListener('touchmove', touchEvents.handlePointerMove.bind(this, state, block));
    block.body.addEventListener('touchend', touchEvents.handlePointerUp.bind(this, state, block));
  });

  scrollEvents.init(els.blocks);

  ux.showStartScreen();
};

document.addEventListener('DOMContentLoaded', init);