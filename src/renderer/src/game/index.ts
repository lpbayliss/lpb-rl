import { IWorld, addComponent, addEntity, createWorld, pipe } from 'bitecs';
import {
  createDialogSystem,
  createInputSystem,
  createMovementSystem,
  createRenderSystem,
} from './systems';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './utils/screen-settings';
import { Player, Position } from './components';
import { createTerminal } from './utils';
import { createGUI } from './utils';

const initGame = (canvas: HTMLCanvasElement): void => {
  const term = createTerminal(canvas);
  const gui = createGUI(term);

  const renderSystem = createRenderSystem(term);
  const [movementSystem, moveBuffer] = createMovementSystem();
  const [dialogSystem, dialogBuffer] = createDialogSystem(gui);
  const inputSystem = createInputSystem(gui, dialogBuffer, moveBuffer);
  const pipeline = pipe(
    inputSystem,
    movementSystem,
    renderSystem,
    dialogSystem,
  );

  const world = createWorld<IWorld>();
  const player = addEntity(world);
  addComponent(world, Position, player);
  addComponent(world, Player, player);
  Position.x[player] = SCREEN_WIDTH / 2;
  Position.y[player] = SCREEN_HEIGHT / 2;

  term.update = (): void => {
    pipeline(world);
  };
};

export { initGame };
