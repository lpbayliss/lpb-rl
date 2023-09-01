import { Cell, Colors, RNG, Terminal, fromRgb } from 'wglt'

export const drawTitle = (term: Terminal, x: number, y: number): void => {
  term.drawString(
    x,
    y,
    '______                             _      _  _          ',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 1,
    '| ___ \\                           | |    (_)| |         ',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 2,
    '| |_/ /  ___    __ _  _   _   ___ | |     _ | | __  ___ ',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 3,
    '|    /  / _ \\  / _` || | | | / _ \\| |    | || |/ / / _ \\',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 4,
    '| |\\ \\ | (_) || (_| || |_| ||  __/| |____| ||   < |  __/',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 5,
    '\\_| \\_| \\___/  \\__, | \\__,_| \\___|\\_____/|_||_|\\_\\ \\___|',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 6,
    '                __/ |                                   ',
    Colors.LIGHT_GREEN
  )
  term.drawString(
    x,
    y + 7,
    '               |___/                                    ',
    Colors.LIGHT_GREEN
  )
}

export const createTitleParticles = (width: number, height: number): ((term: Terminal) => void) => {
  const particleChars = ['', '.', "'", '!', '$', '%', '#', '@']
  const rng = new RNG()
  const particles = new Array(height)

  for (let y = height - 1; y >= height / 2; y--) {
    particles[y] = new Array(width)
    for (let x = 0; x < width; x++) {
      particles[y][x] = 0
    }
  }

  debugger

  return (term: Terminal) => {
    for (let y = height / 2; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (y === height - 1) {
          // If bottom row, randomly set to a particle
          particles[y][x] = rng.nextRange(0, particleChars.length)
        } else {
          // Otherwise, move particle up
          const nextParticle = particleChars[particles[y + 1][x] - 1]
          particles[y][x] = nextParticle ? nextParticle : 0
        }
      }
    }
    debugger
    for (let y = height / 2; y < height; y++) {
      for (let x = 0; x < width; x++) {
        term.drawChar(x, y, particleChars[particles[y][x]])
      }
    }
  }
}
