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
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const cardBg = useColorModeValue('white', 'transparent')
  const cardBorder = useColorModeValue('gray.200', 'whiteAlpha.100')

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
      <Container maxW="container.md">
        <Section>
          <Heading as="h3" fontSize={28} mb={2} textAlign="center">
            Get in Touch
          </Heading>
          <Text textAlign="center" color={mutedText} mb={8} fontSize="sm">
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
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="xl"
              bg={cardBg}
              transition="all 0.2s ease"
              _hover={{
                borderColor: 'brand.400',
                transform: 'translateY(-2px)',
                shadow: 'md',
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
              border="1px solid"
              borderColor={cardBorder}
              borderRadius="xl"
              bg={cardBg}
              transition="all 0.2s ease"
              _hover={{
                borderColor: 'brand.400',
                transform: 'translateY(-2px)',
                shadow: 'md',
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
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="xl"
            bg={cardBg}
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel fontSize="sm">Name</FormLabel>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  size="md"
                  borderRadius="lg"
                />
              </FormControl>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel fontSize="sm">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  size="md"
                  borderRadius="lg"
                />
              </FormControl>
              <FormControl id="message" mb={6} isRequired>
                <FormLabel fontSize="sm">Message</FormLabel>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  borderRadius="lg"
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="cyan"
                size="md"
                _hover={{
                  transform: 'translateY(-1px)',
                  shadow: 'md',
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
