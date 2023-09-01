import { Colors } from 'wglt'
import { GameScene, IMyWorld } from '.'
import { Position } from './components'
import { positionQuery } from './queries'
import { drawTitle, createTitleParticles } from './assets'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './settings'

const drawParticles = createTitleParticles(SCREEN_WIDTH, SCREEN_HEIGHT)

export const renderSystem = (world: IMyWorld): IMyWorld => {
  const { term, scene } = world

  term.clear()
  term.drawString(0, 0, 'FPS: ' + term.fps.toFixed(0), Colors.WHITE, Colors.BLACK)
  term.drawString(0, 1, 'Avg: ' + term.averageFps.toFixed(0), Colors.WHITE, Colors.BLACK)

  if (scene === GameScene.Title) {
    drawParticles(term)
    drawTitle(term, 11, 10)
    return world
  }

  const entities = positionQuery(world)
  for (let i = 0; i < entities.length; i++) {
    const eid = entities[i]
    const x = Position.x[eid]
    const y = Position.y[eid]
    term.drawString(x, y, '@', Colors.LIGHT_GREEN)
  }

  return world
}

export const movementSystem = (world: IMyWorld): IMyWorld => {
  const { term } = world

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
