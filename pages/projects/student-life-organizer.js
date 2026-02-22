import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Image from 'next/image'
import studentLifeManager from '../../public/student_life_manager.png'

const Work = () => (
  <Layout title="Student Life Organizer">
    <Container pt={6}>
      <Title>
        Student Life Organizer <Badge>2024</Badge>
      </Title>
      <P>
        A comprehensive personal student life management system that integrates Canvas, Google Drive, 
        Google Calendar, and Gmail to optimize schedules and workflows. This system links all course 
        information in one centralized location, including Canvas assignments and due dates, Google Drive 
        links to assignment work, Google Calendar class times and meetings, and important course-related 
        emails. This integration dramatically improves efficiency and workflow management for academic life.
      </P>
      <P>
        The system provides intelligent scheduling optimization, automatic assignment tracking, and seamless 
        integration between all academic tools, creating a unified dashboard for managing student responsibilities 
        and deadlines.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jonahs-org.vercel.app/">
            Student Life Manager <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Canvas API, Google APIs, Calendar Integration</span>
        </ListItem>
        <ListItem>
          <Meta>Integrations</Meta>
          <span>Canvas LMS, Google Drive, Google Calendar, Gmail</span>
        </ListItem>
      </List>
      <Image 
        src={studentLifeManager}
        alt="Student Life Manager Dashboard"
        width={1000}
        height={600}
        style={{ borderRadius: '8px', marginTop: '20px' }}
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'

