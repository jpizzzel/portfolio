import { Box, Text } from '@chakra-ui/react'

export const BioSection = ({ children, ...props }) => (
  <Box pl="3.4em" sx={{ textIndent: '-3.4em' }} {...props}>
    {children}
  </Box>
)

export const BioYear = ({ children, ...props }) => (
  <Text as="span" fontWeight="bold" mr="1em" {...props}>
    {children}
  </Text>
)
