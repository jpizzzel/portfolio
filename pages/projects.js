import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import ProjectListItem from '../components/project-list-item'
import { MountainDivider } from '../components/divider'

import calendars from '../public/searchSS.png'
import portfo from '../public/logo.png'
import wate from '../public/ewbim.png'
import jcode from '../public/jumbocode.png'
import Cplus from '../public/c++_logo.png'
import table from '../public/foosball.jpg'
import arm from '../public/leg64.png'
import ee31 from '../public/ee31.jpeg'
import CAD from '../public/CAD_GEN.png'
import smoosh from '../public/smoosh_bros.jpeg'
import hand from '../public/hj.jpg'
import watershed from '../public/watershed.png'
import studentLifeManager from '../public/student_life_manager.png'

const projectList = [
  {
    id: 'courtline',
    title: 'Courtline',
    description:
      'NBA data graphics platform — turn stats into scroll-stopping visuals for social media. Currently building, in user waitlist mode.',
    thumbnail: portfo,
    badges: ['Next.js', 'NBA API', 'In Progress'],
    external: 'https://v0-courtline.vercel.app/',
    year: '2025',
    archived: false,
  },
  {
    id: 'arm-legv8-processor',
    title: '64-bit ARM LEGv8 Processor',
    description:
      'Full VHDL implementation of a 64-bit ARM LEGv8 Processor — pipelined datapath with hazard detection, forwarding, and branch prediction.',
    thumbnail: arm,
    badges: ['VHDL', 'Computer Architecture'],
    year: '2025',
    archived: false,
  },
  {
    id: 'watershed-ai',
    title: 'Multi System AI Agent',
    description:
      'Automated venture capital research and data enrichment system using multi-agent AI architecture. Agents coordinate to scrape, enrich, and score startup data across multiple sources.',
    thumbnail: watershed,
    badges: ['Agentic AI', 'Python', 'Supabase', 'AWS'],
    year: '2025',
    archived: false,
  },
  {
    id: 'smoosh-bros',
    title: 'Smoosh Bros',
    description:
      'A Super Smash Bros-style fighting game built entirely in SystemVerilog on an FPGA. Two-player, real-time combat with sprite rendering, physics, and VGA output.',
    thumbnail: smoosh,
    badges: ['SystemVerilog', 'FPGA', 'Game Dev'],
    year: '2025',
    archived: false,
  },
  {
    id: 'junior-design-project',
    title: 'EE31 Junior Design Project',
    description:
      'Autonomous robot with WebSocket communication and sensor system. Built with Arduino, featuring real-time control via a web interface.',
    thumbnail: ee31,
    badges: ['Arduino', 'WebSocket', 'Embedded'],
    year: '2025',
    archived: false,
  },
  {
    id: 'student-life-organizer',
    title: 'Student Life Organizer',
    description:
      'Personal student life management system with Canvas, Google Drive, Calendar, and Gmail integrations. Automates academic workflows into a single dashboard.',
    thumbnail: studentLifeManager,
    badges: ['Next.js', 'Automation'],
    year: '2025',
    archived: false,
  },
  {
    id: 'HandJam',
    title: 'HandJam',
    description:
      'An instrument powered by machine learning — uses ASL hand sign recognition to trigger musical notes in real time via a camera feed.',
    thumbnail: hand,
    badges: ['ML', 'Embedded', 'Python'],
    year: '2025',
    archived: false,
  },
  {
    id: 'AI-CAD',
    title: 'AI CAD Project Builder',
    description:
      'Generate CAD models from text prompts using AI. Built with Hugging Face models to translate natural language descriptions into 3D-printable designs.',
    thumbnail: CAD,
    badges: ['AI', 'Hugging Face', 'Python'],
    year: '2025',
    archived: false,
  },
  {
    id: 'techlead',
    title: 'EWB Tech Group Lead',
    description:
      'Leading an Engineering Without Borders tech group developing a data retrieval system for a community water project in Malawi.',
    thumbnail: wate,
    badges: ['Leadership', 'Hardware'],
    year: '2024–25',
    archived: false,
  },
  {
    id: 'upcoming',
    title: 'Ideas / In-progress',
    description: 'Projects currently in development or on the drawing board.',
    thumbnail: portfo,
    badges: ['In Progress'],
    year: '',
    archived: false,
  },
  {
    id: 'cplus',
    title: 'C++ Projects',
    description:
      'Collection of data structures and algorithms projects — BSTs, graphs, sorting visualizers, and more.',
    thumbnail: Cplus,
    badges: ['C++', 'Algorithms'],
    year: '2024',
    archived: true,
  },
  {
    id: 'calendar',
    title: 'Calendar Connect',
    description:
      'A website designed to help users compare academic calendars across universities, making it easier to plan visits and coordinate schedules.',
    thumbnail: calendars,
    badges: ['React', 'Full-Stack'],
    year: '2024',
    archived: true,
  },
  {
    id: 'jumbocode',
    title: 'JumboCode Project',
    description:
      'Built the Bread and Roses platform with a team of student developers for social impact through JumboCode at Tufts.',
    thumbnail: jcode,
    badges: ['Full-Stack', 'Social Impact'],
    year: '2024',
    archived: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'This very site — built with Next.js, Chakra UI, Three.js, and Framer Motion. Constantly evolving.',
    thumbnail: portfo,
    badges: ['Next.js'],
    year: '2024',
    archived: true,
  },
  {
    id: 'foosball',
    title: 'Foosball Table',
    description:
      'Designed and manufactured a miniature foosball table from scratch — CAD modeling, laser cutting, and assembly.',
    thumbnail: table,
    badges: ['CAD', 'Design'],
    year: '2023',
    archived: true,
  },
  {
    id: 'water',
    title: 'EWB Water Automation',
    description:
      'Assisted in building the water automation system for the Malawi Greenhouse Project — Arduino-controlled pumps, sensors, and monitoring.',
    thumbnail: wate,
    badges: ['Automation', 'Arduino'],
    year: '2023',
    archived: true,
  },
]

const Projects = () => {
  const mutedText = useColorModeValue('sand.500', 'sand.400')
  const borderColor = useColorModeValue('sand.200', 'sand.800')
  const countColor = useColorModeValue('sand.400', 'sand.600')
  const labelColor = useColorModeValue('sand.500', 'sand.400')

  const activeProjects = projectList.filter((p) => !p.archived)
  const archivedProjects = projectList.filter((p) => p.archived)

  return (
    <Layout title="Projects">
      <Container maxW="container.lg">
        <Section>
          <Heading
            as="h3"
            fontSize={32}
            mb={2}
            textAlign="center"
            fontFamily="var(--font-instrument-serif), Georgia, serif"
            fontWeight="400"
          >
            Projects
          </Heading>
          <Text
            textAlign="center"
            fontFamily="var(--font-caveat), cursive"
            color={mutedText}
            mb={4}
            fontSize="lg"
          >
            A collection of things I&apos;ve built and tinkered with
          </Text>
          <MountainDivider my={4} />
        </Section>

        {/* Active projects */}
        <Section delay={0.1}>
          <Flex align="baseline" gap={3} mb={1} px={{ base: 2, md: 4 }}>
            <Text
              fontSize="xs"
              fontFamily="body"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color={labelColor}
            >
              Recent
            </Text>
            <Text fontSize="xs" color={countColor} fontFamily="body">
              {activeProjects.length}
            </Text>
          </Flex>

          <Box
            borderTop="1px solid"
            borderColor={borderColor}
          >
            {activeProjects.map((item, index) => (
              <ProjectListItem
                key={item.id}
                href={item.external || `/projects/${item.id}`}
                external={!!item.external}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                badges={item.badges}
                year={item.year}
                archived={item.archived}
                index={index}
              />
            ))}
          </Box>
        </Section>

        {/* Archived projects */}
        <Section delay={0.15}>
          <Flex align="baseline" gap={3} mb={1} mt={6} px={{ base: 2, md: 4 }}>
            <Text
              fontSize="xs"
              fontFamily="body"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color={labelColor}
            >
              Archive
            </Text>
            <Text fontSize="xs" color={countColor} fontFamily="body">
              {archivedProjects.length}
            </Text>
          </Flex>

          <Box
            borderTop="1px solid"
            borderColor={borderColor}
          >
            {archivedProjects.map((item, index) => (
              <ProjectListItem
                key={item.id}
                href={item.external || `/projects/${item.id}`}
                external={!!item.external}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                badges={item.badges}
                year={item.year}
                archived={item.archived}
                index={index}
              />
            ))}
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Projects
