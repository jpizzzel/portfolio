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
import { MountainDivider } from '../components/divider'

const featuredProjects = [
  {
    id: 'watershed-ai',
    title: 'Multi System AI Agent',
    description:
      'Automated VC research and data enrichment using multi-agent AI architecture.',
    href: '/projects/watershed-ai',
  },
  {
    id: 'arm-legv8-processor',
    title: '64-bit ARM LEGv8 Processor',
    description: 'A full LEGv8 processor designed and implemented in VHDL.',
    href: '/projects/arm-legv8-processor',
  },
  {
    id: 'smoosh-bros',
    title: 'Smoosh Bros',
    description:
      'A fighting game built entirely in SystemVerilog on an FPGA.',
    href: '/projects/smoosh-bros',
  },
]

const WaveDoodle = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }}
  >
    <path
      d="M1 5 C3 2, 5 8, 8 5 S12 2, 15 5"
      stroke="#D4735E"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

const SectionLabel = ({ children }) => (
  <Text
    fontFamily="var(--font-caveat), cursive"
    fontSize="18px"
    color="sunset.400"
    fontWeight="700"
    display="flex"
    alignItems="center"
  >
    <WaveDoodle />
    {children}
  </Text>
)

const Page = () => {
  const muted = useColorModeValue('sand.500', 'sand.400')
  const subtleBorder = useColorModeValue('sand.200', 'sand.800')
  const pageBg = useColorModeValue('#FBF7F2', '#1A1612')
  const topoOpacity = useColorModeValue(0.06, 0.04)
  const heroOverlayGradient = useColorModeValue(
    `linear-gradient(to bottom, transparent 40%, ${pageBg} 100%), linear-gradient(to right, ${pageBg} 0%, transparent 15%, transparent 85%, ${pageBg} 100%)`,
    `linear-gradient(to bottom, transparent 40%, ${pageBg} 100%), linear-gradient(to right, ${pageBg} 0%, transparent 15%, transparent 85%, ${pageBg} 100%)`
  )

  return (
    <Layout>
      {/* Topo pattern — ambient full-bleed layer behind entire hero zone */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="800px"
        pointerEvents="none"
        zIndex={0}
        opacity={topoOpacity}
        backgroundImage="url('/textures/topo-pattern.png')"
        backgroundRepeat="repeat"
        backgroundSize="300px 300px"
        sx={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 70%)',
        }}
      />

      <Container maxW="container.md" position="relative" zIndex={1}>
        {/* Hero */}
        <Section delay={0}>
          <Box pt={{ base: 10, md: 20 }} pb={{ base: 4, md: 6 }}>
            <HStack spacing={5} align="center" mb={6}>
              <Box
                flexShrink={0}
                w="72px"
                h="72px"
                borderRadius="full"
                overflow="hidden"
                border="3px solid"
                borderColor="sand.300"
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
                <Heading
                  as="h1"
                  fontSize={{ base: '32px', md: '44px' }}
                  fontWeight="400"
                  lineHeight="1.2"
                  fontFamily="var(--font-instrument-serif), Georgia, serif"
                >
                  Jonah Pflaster
                </Heading>
                <Text fontSize="sm" color={muted} mt={1}>
                  Computer Engineering @ Tufts &middot; AI Engineering Intern @ Watershed
                </Text>
              </Box>
            </HStack>

            <Text fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.75" color={useColorModeValue('#2D2319', '#F0E8DE')}>
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

        {/* Hero illustration — full-bleed with soft feathered edges */}
        <Section delay={0.05}>
          <Box
            mx={{ base: -4, md: '-60px' }}
            position="relative"
            overflow="hidden"
          >
            {/* Gradient overlays that feather the illustration edges into page bg */}
            <Box
              position="absolute"
              inset={0}
              zIndex={1}
              pointerEvents="none"
              background={heroOverlayGradient}
            />
            <Box
              w="100%"
              position="relative"
            >
              <Image
                src="/textures/hero-illustration.png"
                alt="Coastal mountain landscape"
                width={1200}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  opacity: 0.85,
                }}
                priority
              />
            </Box>
          </Box>
        </Section>

        <MountainDivider my={4} />

        {/* Featured Work */}
        <Section delay={0.1}>
          <HStack justify="space-between" align="baseline" mb={5}>
            <SectionLabel>Featured Work</SectionLabel>
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

        <MountainDivider />

        {/* Experience */}
        <Section delay={0.15}>
          <SectionLabel>Experience</SectionLabel>
          <Box mt={4} />

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
