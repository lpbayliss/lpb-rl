import { Box, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Terminal } from 'wglt'

const SCREEN_SIZE = 20
const SCREEN_WIDTH = 4 * SCREEN_SIZE // 80
const SCREEN_HEIGHT = 3 * SCREEN_SIZE // 60

const App = (): JSX.Element => {
  useEffect(() => {
    console.log('Build')
    const term = new Terminal(
      document.getElementById('game') as HTMLCanvasElement,
      SCREEN_WIDTH,
      SCREEN_HEIGHT,
      {
        crt: {
          scale: 6,
          blur: 0.5,
          curvature: 0.1,
          chroma: 0.5,
          vignette: 0.15,
          scanlineWidth: 0.75,
          scanlineIntensity: 0.25
        }
      }
    )
    term.clear()
    term.drawString(1, 1, 'Welcome to The Underdark')
    term.drawString(1, 2, '-----------------')
    term.drawString(1, 4, 'Hello, world!')
  }, [])

  return (
    <Flex height="100vh" bg="black" justify="center" align="center">
      <Box as="canvas" id="game" />
    </Flex>
  )
}

export default App
