import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Icon,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import thumbPortfolio from '../public/resume.png';
import Image from 'next/image'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Résumé
      </Heading>

      <Section delay={0.1}>
      <Button
                  as={NextLink}
                  href="/works"
                  scroll={false}
                  colorScheme="teal"
              >
        <a href="/static/resumepdf.pdf" download style={{ color: "#007bff", fontFamily: "Arial, sans-serif", fontSize: "16px", textDecoration: "none" }}>
          Download Résumé <ExternalLinkIcon mx="2px" />
        </a>
        </Button>
        <br />
        <Image
          src={thumbPortfolio}
          width="1000"
          height="1000"
          />
      </Section>

      <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
              Work
          </Heading>
          <Paragraph>I am an undergraduate student at tufts university 
              studying mechanical engineering and computer science. 
          </Paragraph>
              
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
