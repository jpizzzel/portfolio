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
        Jonah&apos;s Portfolio Website<Badge>2024</Badge>
      </Title>
      <P>
        This is the website that you are currently on! I made this in the summer of 2024 to showcase different projects from my past and projects I am currently working on.
        I also wanted to display my website design, three.js, javascript and 3D design skills through a portfolio site. I am not quite sure how else I want to add to this 
        site currently but I know in the future I want to continue to improve this site and experiment with new technologies I come across.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="">
            Back to Homepage <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Three.js, Blender</span>
        </ListItem>
        <ListItem>
          <Meta>Inspiration From</Meta>
          <Link href="https://www.craftz.dog/">
              Takuya Matsuyama <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
