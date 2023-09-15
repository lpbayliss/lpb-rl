import { IWorld } from 'bitecs';

export type SystemFn = (world: IWorld) => IWorld;

export { createMovementSystem } from './movement-system';
export { createRenderSystem } from './render-system';
export { createDialogSystem } from './dialog-system';
export { createInputSystem } from './input-system';
