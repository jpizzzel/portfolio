import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    Icon,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear} from '../components/bio'
import { GridItem } from '../components/grid-item'
import profileImages from '../public/profileim2.jpg';
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I am a current 2nd year engineering student at Tufts!
                </Box>
                    
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Jonah Pflaster
                    </Heading>
                    <p>Mechanical Engineering Major</p>
                    <p>Computer Science Minor</p>
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
                        width="500"
                        height="500"
                        />
                    </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>I am an undergraduate student at Tufts University 
                        studying mechanical engineering and computer science. 
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Button
                            as={NextLink}
                            href="/works"
                            scroll={false}
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            My portfolio
                        </Button>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                    Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2005</BioYear>
                        Born in Long Island, NY.
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Graduated from Earl L Vandermuelen High School and then
                        began my education at Tufts University.
                    </BioSection>
                    <BioSection>
                        <BioYear>Present</BioYear>
                        Engineering Internship in summer of 2024
                    </BioSection>
                </Section>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        My Hobbies
                    </Heading>
                    <Paragraph> I love to play soccer, basketball, chess, go surfing, skiing and 
                        explore new technologies. 
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the Web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/jonah-pflaster-195359218/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    LinkedIn
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/jpizzzel" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @jpizzzel
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/jonah_pflaster/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @jonah_pflaster
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://discord.com/users/UserID/166144309383397376" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
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