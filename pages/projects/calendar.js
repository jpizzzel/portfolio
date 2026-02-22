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
import cal from '../../public/CalendarSS.png';
import cal2 from '../../public/searchSS.png';
import Image from 'next/image'

const Work = () => (
  <Layout title="Calendar Connect">
    <Container pt={6}>
      <Title>
        Calendar Connect <Badge>2024</Badge>
      </Title>
      <P>
        CalendarConnect&apos;s goal is to create an easy and accessible way for students at 
        different universities to see overlap between their schools breaks and important events.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://calendar-connect.vercel.app/#/home">
            CalendarConnect <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Chakra UI, Selenium</span>
        </ListItem>
      </List>
      <Image 
        src={cal}
        alt="Calendar"
        width = "1000"
        height = "1000"
      />
      <Image 
          src={cal2}
          alt="Calendar2"
          width = "1000"
          height = "1000"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
