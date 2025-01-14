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
  
  const Work = () => (
    <Layout title="Calendar Connect">
      <Container>
        <Title>
          Data Analysis Design Tech Group <Badge>2024 - 2025</Badge>
        </Title>
        <P>
            Leading an Engineering Without Borders tech group, 10-20 
            undergraduate engineers. My groups focus is on creating a water source mapping software, hardware design and data storage/analytics.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.tuftsgloballeadership.org/program/ewb">
              Tufts Engineering Without Borders <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Malawi</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, NodeJS, React, Excel</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  