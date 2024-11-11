import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { Container, Heading, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import thumbPortfolio from '../public/resume.png'
import Image from 'next/image'

// Lazy load components
const Layout = dynamic(() => import('../components/layouts/article'), { ssr: false })
const Section = dynamic(() => import('../components/section'), { ssr: false })

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Résumé
      </Heading>

      <Section delay={0}>
        <NextLink href="/static/resume.pdf" passHref>
          <Button as="a" download colorScheme="teal" mb={4}>
            Download Résumé <ExternalLinkIcon mx="2px" />
          </Button>
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
