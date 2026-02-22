import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { WaveDivider } from '../components/divider'

const NotFound = () => {
  const muted = useColorModeValue('sand.500', 'sand.400')
  const shadowColor = useColorModeValue('#D4C4B0', '#3D352C')

  return (
    <Container>
      <Box textAlign="center" py={20}>
        <Heading
          as="h1"
          fontSize={{ base: '80px', md: '120px' }}
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontWeight="400"
          color="brand.400"
          lineHeight="1"
          mb={4}
        >
          404
        </Heading>
        <Text
          fontFamily="var(--font-caveat), cursive"
          fontSize={{ base: '24px', md: '32px' }}
          color="sunset.400"
          mb={2}
        >
          Looks like you wiped out.
        </Text>
        <Text fontSize="sm" color={muted} mb={8}>
          The page you&apos;re looking for was not found.
        </Text>
        <Button
          as={NextLink}
          href="/"
          bg="brand.400"
          color="white"
          size="lg"
          transform="rotate(-1deg)"
          boxShadow={`4px 4px 0 ${shadowColor}`}
          _hover={{
            transform: 'rotate(0deg) translateY(-2px)',
            boxShadow: `5px 5px 0 ${shadowColor}`,
            bg: 'brand.500',
          }}
          transition="all 0.2s ease"
        >
          Paddle back home
        </Button>
      </Box>
      <WaveDivider />
    </Container>
  )
}

export default NotFound
