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
  <Layout title="Rndyr">
    <Container pt={6}>
      <Title>
        Rndyr <Badge>2026</Badge>
      </Title>
      <P>
        Rndyr (said like &quot;render&quot;) turns a student&apos;s own notes
        into a narrated, animated study video, in the style of channels like
        CrashCourse, The Organic Chemistry Tutor and 3Blue1Brown.
      </P>
      <P>
        Paste in lecture notes or a study guide, pick one of eight visual
        styles, and set the length and depth. Rndyr writes the script in
        teaching order, animates it, narrates it, and plays it back in the
        browser with chapters and a synced transcript. A closing quiz and
        practice problems are optional.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rndyr.com" isExternal>
            rndyr.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Live</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js 15, Remotion, Supabase, AWS, Stripe</span>
        </ListItem>
        <ListItem>
          <Meta>AI</Meta>
          <span>LLM script planning, Google Cloud text-to-speech</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
