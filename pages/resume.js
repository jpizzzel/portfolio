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
  const mutedText = useColorModeValue('sand.500', 'sand.400')
  const cardBg = useColorModeValue('#FFFFFF', 'transparent')
  const cardBorder = useColorModeValue('sand.200', 'sand.800')
  const shadowColor = useColorModeValue('#D4C4B0', '#3D352C')

  return (
    <Layout title="Resume">
      <Container maxW="container.md" pt={6}>
        <Section>
          <Heading
            as="h3"
            fontSize={32}
            mb={2}
            textAlign="center"
            fontFamily="var(--font-instrument-serif), Georgia, serif"
            fontWeight="400"
          >
            Résumé
          </Heading>
          <Text
            textAlign="center"
            fontFamily="var(--font-caveat), cursive"
            color={mutedText}
            mb={6}
            fontSize="lg"
          >
            Download or view my current résumé
          </Text>
        </Section>

        <Section delay={0.1}>
          <Box textAlign="center" mb={6}>
            <NextLink href="/static/Jonah_Pflaster_resume.pdf" passHref legacyBehavior>
              <a download>
                <Button
                  bg="brand.400"
                  color="white"
                  size="lg"
                  leftIcon={<DownloadIcon />}
                  transform="rotate(-1deg)"
                  boxShadow={`4px 4px 0 ${shadowColor}`}
                  _hover={{
                    transform: 'rotate(0deg) translateY(-2px)',
                    boxShadow: `5px 5px 0 ${shadowColor}`,
                    bg: 'brand.500',
                  }}
                  transition="all 0.2s ease"
                >
                  Download Résumé
                </Button>
              </a>
            </NextLink>
          </Box>

          <Box
            border="2px solid"
            borderColor={cardBorder}
            borderRadius="12px"
            overflow="hidden"
            bg={cardBg}
            transform="rotate(0.3deg)"
            boxShadow={`6px 6px 0 ${shadowColor}`}
            transition="all 0.3s ease"
            _hover={{
              transform: 'rotate(0deg)',
              boxShadow: `4px 4px 0 ${shadowColor}`,
            }}
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
export { getServerSideProps } from '../components/chakra'
