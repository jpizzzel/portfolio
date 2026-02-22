import Logo from './logo'
import React, { useState, useEffect } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  Collapse,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const SquiggleUnderline = ({ active }) => (
  <Box
    position="absolute"
    bottom="-2px"
    left="0"
    w="100%"
    h="6px"
    overflow="hidden"
    opacity={active ? 1 : 0}
    transition="opacity 0.2s ease"
  >
    <svg
      viewBox="0 0 60 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '6px' }}
    >
      <path
        d="M0 3 C5 1, 10 5, 15 3 S25 1, 30 3 S40 5, 45 3 S55 1, 60 3"
        stroke="#D4735E"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </Box>
)

const NavWaveBorder = () => {
  const color = useColorModeValue('#E8DCD0', '#3D352C')

  return (
    <Box position="absolute" bottom="-8px" left={0} w="100%" h="8px" zIndex={1}>
      <svg
        viewBox="0 0 1200 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '8px', display: 'block' }}
      >
        <path
          d="M0 4 C100 1, 200 7, 300 4 S500 1, 600 4 S800 7, 900 4 S1100 1, 1200 4"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  )
}

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const color = useColorModeValue('#2D2319', '#F0E8DE')
  const activeColor = useColorModeValue('#2B7A8C', '#3D9DB0')

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        p={2}
        px={3}
        display="flex"
        alignItems="center"
        position="relative"
        color={active ? activeColor : color}
        fontWeight={active ? '600' : '400'}
        fontSize="sm"
        borderRadius="0"
        _hover={{
          color: activeColor,
          textDecoration: 'none',
          '& .squiggle': { opacity: 1 },
        }}
        transition="all 0.2s ease"
      >
        {children}
        <Box className="squiggle">
          <SquiggleUnderline active={active} />
        </Box>
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue(
    'rgba(251, 247, 242, 0.85)',
    'rgba(26, 22, 18, 0.85)'
  )
  const hoverBg = useColorModeValue('sand.100', 'sand.800')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={bg}
      style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      zIndex={10}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          width="auto"
          alignItems="center"
          flexGrow={1}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/resume" path={path}>
            Résumé
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
        </Stack>
        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <IconButton
            display={{ base: 'inline-flex', md: 'none' }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle menu"
            onClick={onToggle}
            ml={2}
          />
        </Box>
      </Container>

      <NavWaveBorder />

      {/* Mobile menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box display={{ md: 'none' }} pb={4} px={4}>
          <VStack spacing={1} align="stretch">
            <NextLink href="/" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
                onClick={onToggle}
              >
                Home
              </Link>
            </NextLink>
            <NextLink href="/projects" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
                onClick={onToggle}
              >
                Projects
              </Link>
            </NextLink>
            <NextLink href="/resume" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
                onClick={onToggle}
              >
                Résumé
              </Link>
            </NextLink>
            <NextLink href="/contact" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: hoverBg }}
                onClick={onToggle}
              >
                Contact
              </Link>
            </NextLink>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  )
}

export default Navbar
