import { Terminal } from 'wglt';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './screen-settings';

const createTerminal = (canvas: HTMLCanvasElement): Terminal => {
  return new Terminal(canvas, SCREEN_WIDTH, SCREEN_HEIGHT, {
    crt: {
      scale: 6,
      blur: 0.5,
      curvature: 0.1,
      chroma: 0.5,
      vignette: 0.15,
      scanlineWidth: 0.75,
      scanlineIntensity: 0.25,
    },
    maxFps: 60,
  });
};

export { createTerminal };
