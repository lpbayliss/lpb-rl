import { Box, Flex } from '@chakra-ui/react'
import { initGame } from './game'
import { useEffect } from 'react'

const App = (): JSX.Element => {
  useEffect(() => {
    initGame(document.getElementById('game') as HTMLCanvasElement)
  })

  return (
    <Flex height="100vh" bg="black" justify="center" align="center">
      <Box as="canvas" id="game" />
    </Flex>
  )
}

export default App
