import { IWorld } from 'bitecs';
import { GUI, Key, MessageDialog } from 'wglt';
import { SystemFn } from '.';

export type DialogCommand = {
  key?: Key;
  keys?: Key[];
};

const createDialogSystem = (gui: GUI): [SystemFn, DialogCommand[]] => {
  const dialogBuffer: DialogCommand[] = [];

  const system = (world: IWorld): IWorld => {
    while (dialogBuffer.length) {
      const command = dialogBuffer.pop();
      if (!command) continue;

      if (command.key) {
        // handle key commands
        if (command.key.match(Key.VK_H))
          gui.add(new MessageDialog('ALERT', 'Hello World'));
        if (command.key.match(Key.VK_ESCAPE)) gui.dialogs.pop();
      }

      if (command.keys) {
        // handle multi key commands
      }
    }

    gui.draw();

    return world;
  };

  return [system, dialogBuffer];
};

export { createDialogSystem };
