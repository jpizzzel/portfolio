import Logo from './logo';
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { FaBriefcase, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const LinkItem = ({ href, path, children, icon }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
    return (
        <NextLink href={href} passHref legacyBehavior>
            <Link
                p={2}
                display="flex"
                alignItems="center"
                bg={active ? 'yellow.400' : undefined}
                color={active ? useColorModeValue('gray.500', 'gray.400') : inactiveColor}
                borderRadius="md"
                _hover={{
                    bg: useColorModeValue('yellow.200', 'yellow.600'),
                    color: useColorModeValue('gray.500', 'gray.400'),
                }}
            >
                {icon && <Box mr={2}>{icon}</Box>}
                {children}
            </Link>
        </NextLink>
    );
};

const Navbar = props => {
    const { path } = props;

    const bg = useColorModeValue('linear(to-r, gray.100, yellow.300)', 'linear(to-r, gray.900, yellow.600)');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bgGradient={bg}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/projects" path={path} icon={<FaBriefcase />}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/resume" path={path} icon={<FaFileAlt />}>
                        Résumé
                    </LinkItem>
                    <LinkItem href="/contact" path={path} icon={<FaEnvelope />}>
                        Contact
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Menu>
                        <MenuButton 
                            as={IconButton} 
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>About</MenuItem>
                            </NextLink>
                            <NextLink href="/projects" passHref>
                                <MenuItem as={Link}>Projects</MenuItem>
                            </NextLink>
                            <NextLink href="/resume" passHref>
                                <MenuItem as={Link}>Résumé</MenuItem>
                            </NextLink>
                            <MenuItem as={Link} href="https://github.com/jpizzzel">GitHub</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar
