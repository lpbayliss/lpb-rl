import { IWorld } from 'bitecs'
import { GUI, Key, MessageDialog } from 'wglt'

const createAlertSystem = (gui: GUI) => {
  return (world: IWorld): IWorld => {
    if (gui.terminal.isKeyPressed(Key.VK_H)) {
      gui.add(new MessageDialog('ALERT', 'Hello World'))
    }

    if (gui.terminal.isKeyPressed(Key.VK_ESCAPE)) {
      gui.dialogs.pop()
    }

    gui.draw()

    return world
  }
}

export { createAlertSystem }
