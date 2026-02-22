import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jonah Pflaster - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>

      {/* Paper grain texture overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100%"
        h="100%"
        pointerEvents="none"
        zIndex={9999}
        opacity={0.03}
        mixBlendMode="multiply"
        backgroundImage="url('/textures/paper-grain.png')"
        backgroundRepeat="repeat"
        backgroundSize="128px 128px"
      />
    </Box>
  )
}

export default Main
