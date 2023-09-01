import { createWorld, IWorld, pipe } from 'bitecs'
import { Terminal } from 'wglt'
import { movementSystem, renderSystem } from './systems'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './settings'

export enum GameScene {
  Title,
  Game
}

export interface IMyWorld extends IWorld {
  term: Terminal
  scene: GameScene
}

const createTerminal = (element: HTMLCanvasElement): Terminal => {
  return new Terminal(element, SCREEN_WIDTH, SCREEN_HEIGHT, {
    crt: {
      scale: 6,
      blur: 0.5,
      curvature: 0.1,
      chroma: 0.5,
      vignette: 0.15,
      scanlineWidth: 0.75,
      scanlineIntensity: 0.25
    },
    maxFps: 60
  })
}

const initGame = (canvas: HTMLCanvasElement): void => {
  const pipeline = pipe(movementSystem, renderSystem)
  pipeline

  const world = createWorld<IMyWorld>()
  world.term = createTerminal(canvas)
  world.scene = GameScene.Title

  world.term.update = (): void => {
    pipeline(world)
  }
}

export { initGame }
