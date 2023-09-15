import { IWorld } from 'bitecs';
import { GUI, Key } from 'wglt';
import { DialogCommand } from './dialog-system';
import { MoveCommand, MoveDirection } from './movement-system';

const createInputSystem = (
  gui: GUI,
  dialogBuffer: DialogCommand[],
  moveBuffer: MoveCommand[],
) => {
  return (world: IWorld): IWorld => {
    if (!gui.handleInput()) {
      // Menu Inputs
      if (gui.terminal.isKeyPressed(Key.VK_H))
        dialogBuffer.push({ key: Key.VK_H });

      // Movement Inputs
      if (gui.terminal.isKeyPressed(Key.VK_UP)) {
        console.log('north');
        moveBuffer.push({ direction: MoveDirection.NORTH });
      }
      if (gui.terminal.isKeyPressed(Key.VK_RIGHT))
        moveBuffer.push({ direction: MoveDirection.EAST });
      if (gui.terminal.isKeyPressed(Key.VK_DOWN))
        moveBuffer.push({ direction: MoveDirection.SOUTH });
      if (gui.terminal.isKeyPressed(Key.VK_LEFT))
        moveBuffer.push({ direction: MoveDirection.WEST });
    }

    if (gui.handleInput()) {
      if (gui.terminal.isKeyPressed(Key.VK_ESCAPE)) {
        dialogBuffer.push({ key: Key.VK_ESCAPE });
      }
    }

    return world;
  };
};

export { createInputSystem };
