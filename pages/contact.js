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
  useToast
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import axios from 'axios'

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
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData)
      if (response.status === 200) {
        toast({
          title: 'Message Sent.',
          description: "Thank you for your message! I will get back to you soon.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        setFormData({ name: '', email: '', message: '' }) // Clear form after submission
      }
    } catch (error) {
      toast({
        title: 'An error occurred.',
        description: 'Unable to send message.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Layout title="Contact Me">
      <Container>
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
          <Box fontSize= "12px">
            If there are any issues with the contact page you can always email me at jonahpflaster23pj@gmail.com.
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Contact
