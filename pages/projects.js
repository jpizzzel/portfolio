import { Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import ProjectCard from '../components/project-card'
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
    id: 'arm-legv8-processor',
    title: '64-bit ARM LEGv8 Processor',
    description: 'VHDL implementation of a LEGv8 Processor',
    thumbnail: arm,
    badges: ['VHDL', 'Computer Architecture'],
  },
  {
    id: 'smoosh-bros',
    title: 'Smoosh Bros',
    description:
      'A Super Smash Bros-style fighting game built entirely in SystemVerilog on an FPGA',
    thumbnail: smoosh,
    badges: ['SystemVerilog', 'FPGA', 'Game Dev'],
  },
  {
    id: 'junior-design-project',
    title: 'EE31 Junior Design Project',
    description:
      'Autonomous robot with WebSocket communication and sensor system',
    thumbnail: ee31,
    badges: ['Arduino', 'WebSocket', 'Embedded'],
  },
  {
    id: 'student-life-organizer',
    title: 'Student Life Organizer',
    description:
      'Personal student life management system with Canvas, Google Drive, Calendar, and Gmail integrations.',
    thumbnail: studentLifeManager,
    badges: ['Next.js', 'Automation'],
  },
  {
    id: 'watershed-ai',
    title: 'Multi System AI Agent',
    description:
      'Automated venture capital research and data enrichment system using multi-agent AI architecture.',
    thumbnail: watershed,
    badges: ['AI', 'Python', 'Supabase'],
  },
  {
    id: 'HandJam',
    title: 'HandJam',
    description: 'Created an instrument using Machine Learning',
    thumbnail: hand,
    badges: ['ML', 'Embedded', 'Python'],
  },
  {
    id: 'AI-CAD',
    title: 'AI CAD Project Builder',
    description: 'Utilized AI to better develop CAD models.',
    thumbnail: CAD,
    badges: ['AI', 'Hugging Face', 'Python'],
  },
  {
    id: 'cplus',
    title: 'C++ Projects',
    description: 'Projects in Data Structures and Algorithms',
    thumbnail: Cplus,
    badges: ['C++', 'Algorithms'],
  },
  {
    id: 'techlead',
    title: 'EWB Tech Group Lead',
    description:
      'Leading an Engineering Without Borders tech group developing a data retrieval system for a community in Malawi.',
    thumbnail: wate,
    badges: ['Leadership', 'Hardware'],
  },
  {
    id: 'calendar',
    title: 'Calendar Connect',
    description:
      'A website designed to help users compare academic calendars across universities.',
    thumbnail: calendars,
    badges: ['React', 'Full-Stack'],
  },
  {
    id: 'jumbocode',
    title: 'JumboCode Project',
    description: 'Working on the Bread and Roses project for social impact.',
    thumbnail: jcode,
    badges: ['Full-Stack', 'Social Impact'],
  },
  {
    id: 'foosball',
    title: 'Foosball Table',
    description: 'Designed and developed a small Foosball table',
    thumbnail: table,
    badges: ['CAD', 'Design'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my skills and projects.',
    thumbnail: portfo,
    badges: ['Next.js', 'Chakra UI'],
  },
  {
    id: 'water',
    title: 'EWB Water Automation',
    description:
      'Assisted in the creation of the water automation system for the Malawi Greenhouse Project.',
    thumbnail: wate,
    badges: ['Automation', 'Arduino'],
  },
  {
    id: 'courtline',
    title: 'Courtline',
    description:
      'NBA data graphics platform — turn stats into scroll-stopping visuals for social media. Currently building, in user waitlist mode.',
    thumbnail: portfo,
    badges: ['Next.js', 'NBA API', 'In Progress'],
    external: 'https://v0-courtline.vercel.app/',
  },
  {
    id: 'upcoming',
    title: 'Ideas / In-progress',
    description: 'Projects currently in development.',
    thumbnail: portfo,
    badges: ['In Progress'],
  },
]

const Projects = () => {
  const mutedText = useColorModeValue('sand.500', 'sand.400')

  return (
    <Layout title="Projects">
      <Container maxW="container.lg" pt={6}>
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

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {projectList.map((item, index) => (
            <Section key={item.id} delay={index * 0.05}>
              <ProjectCard
                href={item.external || `/projects/${item.id}`}
                external={!!item.external}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                badges={item.badges}
                index={index}
              />
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
