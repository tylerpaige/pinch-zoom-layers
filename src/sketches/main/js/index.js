import '../css/styles.scss';
import { getElements } from './util';
import * as stateMgmt from './state-management';
import * as events from './touch-events';

const init = () => {
  const root = document.getElementById('root');
  const els = getElements(root);
  const state = stateMgmt.getDefault(els);

  root.addEventListener('touchstart', events.handlePointerDown.bind(this, state, els));
  root.addEventListener('touchmove', events.handlePointerMove.bind(this, state, els));
  root.addEventListener('touchend', events.handlePointerUp.bind(this, state, els));
};

document.addEventListener('DOMContentLoaded', init);