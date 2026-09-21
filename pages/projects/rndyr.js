import {
  Container,
  Badge,
  List,
  ListItem,
  Heading,
  Text,
  Box
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rndyr">
    <Container pt={6}>
      <Title>
        Rndyr <Badge>2026</Badge>
      </Title>
      <Badge colorScheme="orange" mb={4}>
        BETA
      </Badge>
      <P>
        Rndyr is an AI-powered study video generator. A student pastes in their
        raw study materials, lecture notes, slides, textbook excerpts, or just a
        list of topics, and Rndyr turns them into a polished, narrated
        educational video in the style of channels like The Organic Chemistry
        Tutor, CrashCourse, and 3Blue1Brown.
      </P>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        How It Works
      </Heading>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Pick Your Style</Text>
        <Text>
          Eight visual styles to choose from (precise, chalkboard, marker board,
          editorial, and more), plus controls for depth, length, and extras like
          a closing quiz or practice problems.
        </Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Planning Engine</Text>
        <Text>
          An LLM writes a pedagogically structured script with word-synced
          visual cues: equations, graphs, diagrams, code, tables, and a library
          of Manim-style animated components.
        </Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Render + Narrate</Text>
        <Text>
          Cues are rendered programmatically with Remotion, narrated with
          ElevenLabs voice synthesis, verified, and stitched into a single MP4.
        </Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Personal Library</Text>
        <Text>
          Finished videos land in a library where the student can watch, share,
          or retry a render.
        </Text>
      </Box>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        Under the Hood
      </Heading>

      <List spacing={2} mb={4}>
        <ListItem>• pnpm/Turborepo monorepo</ListItem>
        <ListItem>• Next.js 15 web app backed by Supabase (Postgres, auth, storage)</ListItem>
        <ListItem>• pg-boss job queue feeding a Node render worker</ListItem>
        <ListItem>• Stripe for free/student/unlimited tiers</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Status</Meta>
          <span>In beta</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js 15, Remotion, Supabase, pg-boss, Node, Stripe</span>
        </ListItem>
        <ListItem>
          <Meta>Key Technologies</Meta>
          <span>LLM Planning, Programmatic Video, ElevenLabs TTS, Turborepo</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
