import React, { useState } from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Text,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const toast = useToast()
  const mutedText = useColorModeValue('sand.500', 'sand.400')
  const cardBg = useColorModeValue('#FFFFFF', 'transparent')
  const cardBorder = useColorModeValue('sand.200', 'sand.800')
  const inputBorder = useColorModeValue('sand.300', 'sand.600')
  const shadowColor = useColorModeValue('#D4C4B0', '#3D352C')

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const templateParams = {
      to_name: 'Jonah',
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email,
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        toast({
          title: 'Message Sent.',
          description:
            'Thank you for your message! I will get back to you soon.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setFormData({ name: '', email: '', message: '' })
      })
      .catch(() => {
        toast({
          title: 'An error occurred.',
          description: 'Unable to send message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      })
  }

  return (
    <Layout title="Contact Me">
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
            Get in Touch
          </Heading>
          <Text
            textAlign="center"
            fontFamily="var(--font-caveat), cursive"
            color={mutedText}
            mb={8}
            fontSize="lg"
          >
            Feel free to reach out via email or the form below
          </Text>
        </Section>

        {/* Contact Info Cards */}
        <Section delay={0.1}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={8}>
            <Box
              as="a"
              href="mailto:jonahpflaster23pj@gmail.com"
              p={4}
              border="2px dashed"
              borderColor={cardBorder}
              borderRadius="12px"
              bg={cardBg}
              transition="all 0.2s ease"
              _hover={{
                borderColor: 'brand.400',
                transform: 'translateY(-2px)',
                boxShadow: `3px 3px 0 ${shadowColor}`,
              }}
            >
              <HStack spacing={3}>
                <EmailIcon color="brand.400" />
                <Box>
                  <Text fontSize="sm" fontWeight="600">
                    Email
                  </Text>
                  <Text fontSize="xs" color={mutedText}>
                    jonahpflaster23pj@gmail.com
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box
              as="a"
              href="https://www.linkedin.com/in/jonah-pflaster-195359218/"
              target="_blank"
              p={4}
              border="2px dashed"
              borderColor={cardBorder}
              borderRadius="12px"
              bg={cardBg}
              transition="all 0.2s ease"
              _hover={{
                borderColor: 'brand.400',
                transform: 'translateY(-2px)',
                boxShadow: `3px 3px 0 ${shadowColor}`,
              }}
            >
              <HStack spacing={3}>
                <Icon as={IoLogoLinkedin} color="brand.400" />
                <Box>
                  <Text fontSize="sm" fontWeight="600">
                    LinkedIn
                  </Text>
                  <Text fontSize="xs" color={mutedText}>
                    Jonah Pflaster
                  </Text>
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </Section>

        {/* Contact Form */}
        <Section delay={0.2}>
          <Box
            p={6}
            border="2px solid"
            borderColor={cardBorder}
            borderRadius="12px"
            bg={cardBg}
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel
                  fontFamily="var(--font-caveat), cursive"
                  fontSize="16px"
                  color="sunset.400"
                >
                  Name
                </FormLabel>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  size="md"
                  variant="flushed"
                  borderBottomWidth="2px"
                  borderColor={inputBorder}
                  _focus={{ borderColor: 'brand.400' }}
                />
              </FormControl>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel
                  fontFamily="var(--font-caveat), cursive"
                  fontSize="16px"
                  color="sunset.400"
                >
                  Email
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  size="md"
                  variant="flushed"
                  borderBottomWidth="2px"
                  borderColor={inputBorder}
                  _focus={{ borderColor: 'brand.400' }}
                />
              </FormControl>
              <FormControl id="message" mb={6} isRequired>
                <FormLabel
                  fontFamily="var(--font-caveat), cursive"
                  fontSize="16px"
                  color="sunset.400"
                >
                  Message
                </FormLabel>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  variant="flushed"
                  borderBottomWidth="2px"
                  borderColor={inputBorder}
                  _focus={{ borderColor: 'brand.400' }}
                />
              </FormControl>
              <Button
                type="submit"
                bg="brand.400"
                color="white"
                size="md"
                transform="rotate(-0.5deg)"
                boxShadow={`3px 3px 0 ${shadowColor}`}
                _hover={{
                  transform: 'rotate(0deg) translateY(-1px)',
                  boxShadow: `4px 4px 0 ${shadowColor}`,
                  bg: 'brand.500',
                }}
                transition="all 0.2s ease"
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
