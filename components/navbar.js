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

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const color = useColorModeValue('gray.700', 'gray.200')
  const activeColor = useColorModeValue('brand.500', 'brand.400')

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link
        p={2}
        px={3}
        display="flex"
        alignItems="center"
        color={active ? activeColor : color}
        fontWeight={active ? '600' : '400'}
        fontSize="sm"
        borderBottom="2px solid"
        borderColor={active ? 'brand.400' : 'transparent'}
        borderRadius="0"
        _hover={{
          color: activeColor,
          borderColor: 'brand.400',
          textDecoration: 'none',
        }}
        transition="all 0.2s ease"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { isOpen, onToggle } = useDisclosure()
  const bg = useColorModeValue(
    'rgba(250, 250, 250, 0.8)',
    'rgba(10, 10, 10, 0.8)'
  )
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
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
      borderBottom="1px solid"
      borderColor={borderColor}
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

      {/* Mobile menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box display={{ md: 'none' }} pb={4} px={4}>
          <VStack spacing={1} align="stretch">
            <NextLink href="/" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
                onClick={onToggle}
              >
                Home
              </Link>
            </NextLink>
            <NextLink href="/projects" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
                onClick={onToggle}
              >
                Projects
              </Link>
            </NextLink>
            <NextLink href="/resume" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
                onClick={onToggle}
              >
                Résumé
              </Link>
            </NextLink>
            <NextLink href="/contact" passHref legacyBehavior>
              <Link
                p={3}
                borderRadius="md"
                _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
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
