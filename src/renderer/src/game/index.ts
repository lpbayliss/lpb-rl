import { IWorld, addComponent, addEntity, createWorld, pipe } from 'bitecs'
import { createAlertSystem, createMovementSystem, createRenderSystem } from './systems'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './utils/screen-settings'
import { Position } from './components'
import { createTerminal } from './utils'
import { createGUI } from './utils'

const initGame = (canvas: HTMLCanvasElement): void => {
  const term = createTerminal(canvas)
  const gui = createGUI(term)

  const renderSystem = createRenderSystem(term)
  const movementSystem = createMovementSystem(term, gui)
  const alertSystem = createAlertSystem(gui)
  const pipeline = pipe(movementSystem, renderSystem, alertSystem)

  const world = createWorld<IWorld>()
  const eid = addEntity(world)
  addComponent(world, Position, eid)
  Position.x[eid] = SCREEN_WIDTH / 2
  Position.y[eid] = SCREEN_HEIGHT / 2

  term.update = (): void => {
    pipeline(world)
  }
}

export { initGame }
