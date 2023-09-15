import { GUI, Terminal } from 'wglt';

const createGUI = (term: Terminal): GUI => {
  return new GUI(term);
};

export { createGUI };
