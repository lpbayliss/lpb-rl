import { GUI, Terminal } from 'wglt'
import { Position } from '../components'
import { positionQuery } from '../queries'
import { IWorld } from 'bitecs'

export const createMovementSystem = (term: Terminal, gui: GUI) => {
  return (world: IWorld): IWorld => {
    if (gui.handleInput()) return world

    const moveKey = term.getMovementKey()
    if (!moveKey) return world

    const entities = positionQuery(world)
    for (let i = 0; i < entities.length; i++) {
      const eid = entities[i]
      Position.x[eid] += moveKey.x
      Position.y[eid] += moveKey.y
    }

    return world
  }
}
