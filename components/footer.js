import { Box, Divider, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Footer = () => {
  const color = useColorModeValue('gray.500', 'gray.500')

  return (
    <Box as="footer" pb={6} pt={4} px={4}>
      <Divider mb={4} borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')} />
      <Box textAlign="center">
        <HStack justify="center" spacing={3} mb={2}>
          <IconButton
            as="a"
            href="https://github.com/jpizzzel"
            target="_blank"
            aria-label="GitHub"
            icon={<IoLogoGithub />}
            variant="ghost"
            size="sm"
            color={color}
            _hover={{ color: 'brand.400', transform: 'translateY(-1px)' }}
            transition="all 0.2s ease"
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/jonah-pflaster-195359218/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<IoLogoLinkedin />}
            variant="ghost"
            size="sm"
            color={color}
            _hover={{ color: 'brand.400', transform: 'translateY(-1px)' }}
            transition="all 0.2s ease"
          />
        </HStack>
        <Text fontSize="xs" color={color}>
          &copy; {new Date().getFullYear()} Jonah Pflaster. All Rights Reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
