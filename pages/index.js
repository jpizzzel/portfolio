import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Section from '../components/section'
import profileImages from '../public/profileim2.jpg'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from 'react-icons/io5'
import { DeskSpinner } from '../components/desk-loader'
import ProjectCard from '../components/project-card'
import watershed from '../public/watershed.png'
import Leg64 from '../public/leg64.png'
import smoosh_bros from '../public/smoosh_bros.jpeg'

const Desk = dynamic(() => import('../components/desk'), {
  ssr: false,
  loading: () => <DeskSpinner />,
})

const featuredProjects = [
  {
    id: 'watershed-ai',
    title: 'Multi System AI Agent',
    description:
      'Automated VC research and data enrichment using multi-agent AI architecture.',
    thumbnail: watershed,
    badges: ['Python', 'Supabase', 'AWS'],
    href: '/projects/watershed-ai',
  },
  {
    id: 'arm-legv8-processor',
    title: '64-bit ARM LEGv8 Processor',
    description: 'A full LEGv8 processor designed and implemented in VHDL.',
    thumbnail: Leg64,
    badges: ['VHDL', 'Architecture'],
    href: '/projects/arm-legv8-processor',
  },
  {
    id: 'smoosh-bros',
    title: 'Smoosh Bros',
    description:
      'A fighting game built entirely in SystemVerilog on an FPGA.',
    thumbnail: smoosh_bros,
    badges: ['SystemVerilog', 'FPGA'],
    href: '/projects/smoosh-bros',
  },
]

const Page = () => {
  const muted = useColorModeValue('gray.500', 'gray.400')
  const subtleBorder = useColorModeValue('gray.200', 'whiteAlpha.100')

  return (
    <Layout>
      <Container maxW="container.md">
        {/* ── Hero ── */}
        <Section delay={0}>
          <Box pt={{ base: 10, md: 20 }} pb={{ base: 6, md: 10 }}>
            <HStack spacing={5} align="center" mb={6}>
              <Box
                flexShrink={0}
                w="72px"
                h="72px"
                borderRadius="full"
                overflow="hidden"
              >
                <Image
                  src={profileImages}
                  alt="Jonah Pflaster"
                  width={144}
                  height={144}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  priority
                />
              </Box>
              <Box>
                <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700" lineHeight="1.2">
                  Jonah Pflaster
                </Heading>
                <Text fontSize="sm" color={muted} mt={1}>
                  Computer Engineering @ Tufts &middot; AI Engineering Intern @ Watershed
                </Text>
              </Box>
            </HStack>

            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.75" color={useColorModeValue('gray.700', 'gray.300')}>
              I build things at the intersection of software and hardware &mdash; from
              multi-agent AI systems to processors in VHDL and games on FPGAs.
              Currently interning at{' '}
              <Text as="a" href="https://watershed.vc" target="_blank" color="brand.400" _hover={{ color: 'brand.300' }}>
                Watershed Ventures
              </Text>
              .
            </Text>

            <HStack spacing={2} mt={5}>
              <Link href="https://github.com/jpizzzel" target="_blank" isExternal>
                <IconButton
                  aria-label="GitHub"
                  icon={<IoLogoGithub size={18} />}
                  variant="ghost"
                  size="sm"
                  color={muted}
                  _hover={{ color: 'brand.400' }}
                  transition="all 0.2s ease"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/jonah-pflaster-195359218/" target="_blank" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<IoLogoLinkedin size={18} />}
                  variant="ghost"
                  size="sm"
                  color={muted}
                  _hover={{ color: 'brand.400' }}
                  transition="all 0.2s ease"
                />
              </Link>
              <Link href="mailto:jonahpflaster23pj@gmail.com">
                <IconButton
                  aria-label="Email"
                  icon={<IoMailOutline size={18} />}
                  variant="ghost"
                  size="sm"
                  color={muted}
                  _hover={{ color: 'brand.400' }}
                  transition="all 0.2s ease"
                />
              </Link>
            </HStack>
          </Box>
        </Section>

        {/* ── 3D Model ── */}
        <Section delay={0.05}>
          <Desk />
        </Section>

        {/* ── Featured Work ── */}
        <Section delay={0.1}>
          <HStack justify="space-between" align="baseline" mb={5}>
            <Text fontSize="xs" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase" color={muted}>
              Featured Work
            </Text>
            <Button
              as={NextLink}
              href="/projects"
              size="xs"
              variant="ghost"
              rightIcon={<ChevronRightIcon />}
              color={muted}
              fontWeight="400"
              _hover={{ color: 'brand.400' }}
              transition="all 0.2s ease"
            >
              All projects
            </Button>
          </HStack>

          <VStack spacing={0} align="stretch" borderTop="1px solid" borderColor={subtleBorder}>
            {featuredProjects.map(project => (
              <Box
                key={project.id}
                as={NextLink}
                href={project.href}
                scroll={false}
                display="block"
                py={5}
                borderBottom="1px solid"
                borderColor={subtleBorder}
                transition="all 0.15s ease"
                _hover={{
                  pl: 2,
                  color: 'brand.400',
                }}
              >
                <HStack justify="space-between" align="flex-start">
                  <Box>
                    <Text fontWeight="500" fontSize="sm">
                      {project.title}
                    </Text>
                    <Text fontSize="xs" color={muted} mt={0.5}>
                      {project.description}
                    </Text>
                  </Box>
                  <ChevronRightIcon color={muted} mt={1} flexShrink={0} />
                </HStack>
              </Box>
            ))}
          </VStack>
        </Section>

        {/* ── Experience ── */}
        <Section delay={0.15}>
          <Text fontSize="xs" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase" color={muted} mb={5}>
            Experience
          </Text>

          <VStack spacing={4} align="stretch">
            {[
              { role: 'AI Software Engineering Intern', org: 'Watershed Ventures', date: '2025 – Present' },
              { role: 'CS Teaching Assistant', org: 'Tufts University', date: '2025' },
              { role: 'Engineering Intern', org: 'SoundSense', date: '2024' },
            ].map((item, i) => (
              <HStack key={i} justify="space-between" align="flex-start">
                <Box>
                  <Text fontSize="sm" fontWeight="500">
                    {item.role}
                  </Text>
                  <Text fontSize="xs" color={muted}>
                    {item.org}
                  </Text>
                </Box>
                <Text fontSize="xs" color={muted} flexShrink={0}>
                  {item.date}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
