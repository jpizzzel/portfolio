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
  <Layout title="Watershed VC AI System">
    <Container pt={6}>
      <Title>
        Watershed VC AI System<Badge>2025-26</Badge>
      </Title>
      <P>
        Built a complete AI agent system for Watershed Ventures that handles nearly every part of a VC partner's
        daily workflow. The system automates research, company and people evaluation, investment memo drafting,
        deal flow tracking, and monitoring of early-stage and stealth company developments as they happen.
      </P>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        What It Does
      </Heading>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Research + Evaluation</Text>
        <Text>Agents independently source, enrich, and score companies and founders across data providers, accelerators, and early-stage funds. Cross-references funding history, headcount trends, LinkedIn profiles, and more to build a full picture fast.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Memo Drafting</Text>
        <Text>Generates structured investment memos from enriched data, saving partners hours of manual writing while keeping the output grounded in real data points.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Stealth + Early-Stage Tracking</Text>
        <Text>Monitors rapid developments and changes at stealth and pre-seed companies that traditional tools miss. Surfaces signals before they hit the mainstream deal flow.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Daily Partner Workflows</Text>
        <Text>Handles CSV imports, database updates, portfolio monitoring, and recurring data hygiene tasks. Partners interact through an internal platform to view results, filter companies and people, and manually adjust when needed.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Agent Architecture</Text>
        <Text>Specialized agents for company retrieval, data enrichment, memo generation, and database management, all coordinated through a central orchestrator. LLM-driven reasoning (Google Gemini) lets agents decide when to query APIs, update records, or flag incomplete information.</Text>
      </Box>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        Impact
      </Heading>

      <List spacing={2} mb={4}>
        <ListItem>• Cut manual research and data entry time by over 50%</ListItem>
        <ListItem>• Always up-to-date view of emerging startups, stealth companies, and fund activity</ListItem>
        <ListItem>• Foundation for autonomous deal-sourcing workflows that keep getting better over time</ListItem>
        <ListItem>• Internal platform used daily by the team to interact with the system</ListItem>
      </List>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Company</Meta>
          <span>Watershed Ventures</span>
        </ListItem>
        <ListItem>
          <Meta>Role</Meta>
          <span>AI Software Engineering Intern</span>
        </ListItem>
        <ListItem>
          <Meta>Duration</Meta>
          <span>May 2025 - Present</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Google Gemini, Supabase/Postgres, AWS, Next.js</span>
        </ListItem>
        <ListItem>
          <Meta>Key Technologies</Meta>
          <span>Multi-Agent AI, Database Design, API Integration, LLM Reasoning</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work

