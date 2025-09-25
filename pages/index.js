import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    Icon,
    List,
    ListItem,
    useColorModeValue,
    HStack
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear} from '../components/bio'
import profileImages from '../public/profileim2.jpg';
import BentoGrid1 from '../components/bento1'
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoLinkedin
} from 'react-icons/io5'
import TabsW from '../components/tabs'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('gray.100', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I am a current 3rd year engineering student at Tufts!
                </Box>
                    
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonah Pflaster
                    </Heading>
                    <p>Computer Engineering Major</p>
                    <p>Medford, MA</p>
                    <p>LI, NY</p>
                    </Box>
                    <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                    >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="200px"
                        h="200px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                        src={profileImages}
                        alt="Profile image"
                        width="500px"
                        height="500px"
                        _hover={{
                            transform: 'translate(10px, -10px)', // Moves 10px right and 10px up
                            transition: 'transform 0.3s ease', // Smooth transition
                          }}
                        />
                    </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me!
                    </Heading>
                    <Paragraph>
                        I love futbol, skiing, surfing, and messing around with new technologies. Currently I am working on a project centered around AI generated CAD.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/projects"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="cyan"
                            overflow="hidden"
                            transition="transform 0.3s ease, box-shadow 0.3s ease"
                            _hover={{
                                transform: 'scale(1.05)',
                                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                            }}
                        >
                            Portfolio
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <TabsW />
                </Section>

                <Section delay={0.2}>
                <HStack justify="space-between" align="center" mb={4}>
                    <Heading as="h3" variant="section-title">
                        Featured Projects
                    </Heading>
                    <Button
                        as={NextLink}
                        href="/projects"
                        size="sm"
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="cyan"
                        variant="ghost"
                        transition="transform 0.3s ease, box-shadow 0.3s ease"
                        _hover={{
                            transform: 'scale(1.05)',
                            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
                        }}
                        >
                        View More
                    </Button>
                    </HStack>
                    <BentoGrid1 />
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Links
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/jonah-pflaster-195359218/" target="_blank">
                                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    LinkedIn
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/jpizzzel" target="_blank">
                                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @jpizzzel
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/jonah_pflaster/" target="_blank">
                                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @jonah_pflaster
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.com/users/UserID/166144309383397376" target="_blank">
                                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page