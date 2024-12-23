import Logo from './logo';
import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
    return (
        <NextLink href={href} passHref legacyBehavior>
            <Link p={2} bg={active ? 'glassTeal' : undefined} color={active ? '#dec973' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    );
};

const Navbar = props => {
    const { path } = props;

    // Ensure useColorModeValue is called unconditionally
    const bg = useColorModeValue('gray.100', '#20202380');

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
            bg={bg}
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
                justify="space-between">
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
                    <LinkItem href="/works" path={path}>
                        <div>Works</div>
                    </LinkItem>
                    <LinkItem href="/resume" path={path}>
                        <div>Résumé</div>
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        <div>Contact</div>
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
                            <NextLink href="/works" passHref>
                                <MenuItem as={Link}>Works</MenuItem>
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
    )
}

export default Navbar;
