import { Text } from '@chakra-ui/react'

const Paragraph = ({ children, ...props }) => (
  <Text textAlign="justify" textIndent="1em" sx={{ hyphens: 'auto' }} {...props}>
    {children}
  </Text>
)

export default Paragraph
