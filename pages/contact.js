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
  Center,
  Button,
  useToast
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const toast = useToast()

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const templateParams = {
      to_name: 'Jonah', // This is the recipient's name
      from_name: formData.name,
      message: formData.message,
      reply_to: formData.email // Allows you to reply directly to the sender's email
    }

    // Use EmailJS to send email
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      toast({
        title: 'Message Sent.',
        description: "Thank you for your message! I will get back to you soon.",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', message: '' }) // Clear form after submission
    })
    .catch((error) => {
      console.log('FAILED...', error)
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
      <Container>
        <Center>
          <Box mb={4}>
            jonahpflaster23pj@gmail.com or jonah.pflaster@tufts.edu
          </Box>
        </Center>
        <Center>
          <Box mb={4}>
            OR
          </Box>
        </Center>
        
        <Heading as="h3" fontSize={20} mb={4}>
          Contact Me
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Box>
            <form onSubmit={handleSubmit}>
              <FormControl id="name" mb={4} isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" value={formData.name} onChange={handleChange} />
              </FormControl>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
              </FormControl>
              <FormControl id="message" mb={4} isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" value={formData.message} onChange={handleChange} />
              </FormControl>
              <Button type="submit" colorScheme="teal">
                Send Message
              </Button>
            </form>
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Contact
