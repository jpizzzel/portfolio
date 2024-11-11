import NextLink from 'next/link'
import { Container, Heading, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import thumbPortfolio from '../public/resume.png'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Résumé
      </Heading>

      <Section delay={0}>
        {/* Use legacyBehavior with NextLink and wrap Button in <a> */}
        <NextLink href="/static/resume.pdf" passHref legacyBehavior>
          <a download>
            <Button colorScheme="teal" mb={4}>
              Download Résumé <ExternalLinkIcon mx="2px" />
            </Button>
          </a>
        </NextLink>

        <Image
          src={thumbPortfolio}
          alt="Thumbnail of the portfolio"
          width={500}
          height={500}
          placeholder="blur" 
          quality={75}
          loading="lazy"
        />
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getStaticProps } from '../components/chakra'
