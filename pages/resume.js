import NextLink from 'next/link'
import {
  Container,
  Heading,
  Button,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import thumbPortfolio from '../public/resume.png'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Resume = () => {
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'transparent')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.100')

  return (
    <Layout title="Resume">
      <Container maxW="container.md">
        <Section>
          <Heading as="h3" fontSize={28} mb={2} textAlign="center">
            Résumé
          </Heading>
          <Text textAlign="center" color={mutedText} mb={6} fontSize="sm">
            Download or view my current résumé
          </Text>
        </Section>

        <Section delay={0.1}>
          <Box textAlign="center" mb={6}>
            <NextLink href="/static/resume.pdf" passHref legacyBehavior>
              <a download>
                <Button
                  colorScheme="cyan"
                  size="lg"
                  leftIcon={<DownloadIcon />}
                  _hover={{
                    transform: 'translateY(-1px)',
                    shadow: 'lg',
                  }}
                  transition="all 0.2s ease"
                >
                  Download Résumé
                </Button>
              </a>
            </NextLink>
          </Box>

          <Box
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            overflow="hidden"
            bg={cardBg}
            boxShadow="lg"
          >
            <Image
              src={thumbPortfolio}
              alt="Résumé preview"
              width={800}
              height={1000}
              placeholder="blur"
              quality={90}
              loading="lazy"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Resume
export { getStaticProps } from '../components/chakra'
