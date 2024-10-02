import Layout from '../components/layouts/article'
import Section from '../components/section'
import NextLink from 'next/link'
import {
  Container,
  Heading,
  Button,
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
        <NextLink href="/static/resume.pdf" passHref>
          <Button
            as="a"
            download
            colorScheme="teal"
          >
            Download Résumé <ExternalLinkIcon mx="2px" />
          </Button>
        </NextLink>
        <br />
        <Image
          src={thumbPortfolio}
          alt="Thumbnail of the portfolio"
          width="1000"
          height="1000"
        />
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
