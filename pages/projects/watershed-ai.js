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
  <Layout title="Multi System AI Agent">
    <Container>
      <Title>
        Multi-Agent AI System<Badge>2025</Badge>
      </Title>
      <P>
        I created a multi-agent AI system that automated Watershed Ventures' venture capital research and data enrichment process. 
        The system streamlined sourcing, evaluating, and maintaining structured information on startups and investors, providing analysts 
        with reliable, real-time data.
      </P>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        Key Contributions
      </Heading>
      
      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Agent Architecture:</Text>
        <Text>Designed specialized agents for company retrieval, data enrichment, and database management, coordinated through a central orchestrator.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>API Integrations:</Text>
        <Text>Connected to major data providers to automatically pull and cross-reference startup and investor data.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Database Engineering:</Text>
        <Text>Built a Supabase/Postgres schema for company_profiles and people, with JSONB fields for founders and SQL triggers for automatic indexing and search.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>Automated Pipelines:</Text>
        <Text>Implemented workflows for importing CSVs, enriching missing fields (funding history, headcount, LinkedIn profiles), and updating investor portfolios.</Text>
      </Box>

      <Box mb={4}>
        <Text fontWeight="bold" mb={2}>LLM-Driven Reasoning:</Text>
        <Text>Used Google Gemini to enable agents to make context-aware decisions on when to query APIs, update records, or escalate incomplete information.</Text>
      </Box>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        Impact
      </Heading>
      
      <List spacing={2} mb={4}>
        <ListItem>• Cut manual research and data entry time by over 50%</ListItem>
        <ListItem>• Provided Watershed with an always up-to-date view of emerging startups across accelerators and early-stage funds</ListItem>
        <ListItem>• Built the foundation for autonomous deal-sourcing workflows that improve speed and accuracy in venture research</ListItem>
        <ListItem>• Created an internal platform for interacting with the agent, viewing results, manually updating data if needed, filtering and viewing companies and people</ListItem>
      </List>

      <Heading as="h3" variant="section-title" mt={6} mb={4}>
        Takeaways
      </Heading>
      
      <P>
        This project strengthened my experience in multi-agent AI systems, database design, and API-driven automation, 
        and showed me how to align cutting-edge AI with practical business workflows in venture capital.
      </P>

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
          <span>Python, Google Gemini, Supabase/Postgres, React, APIs</span>
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

