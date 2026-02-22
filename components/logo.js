import Link from 'next/link'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const WaveDoodle = () => (
  <motion.svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', flexShrink: 0 }}
  >
    <path
      d="M2 12 C4 8, 6 14, 9 10 S13 6, 16 10"
      stroke="#2B7A8C"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M2 14 C5 11, 7 15, 10 12 S14 9, 16 12"
      stroke="#D4735E"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </motion.svg>
)

const Logo = () => {
  const textColor = useColorModeValue('#2D2319', '#F0E8DE')

  return (
    <Link href="/" passHref>
      <Box
        as="span"
        fontWeight="bold"
        fontSize="18px"
        display="inline-flex"
        alignItems="center"
        h="30px"
        lineHeight="20px"
        p="10px"
        sx={{
          '&:hover svg': {
            animation: 'bob 0.6s ease-in-out',
          },
          '@keyframes bob': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-3px)' },
          },
        }}
      >
        <WaveDoodle />
        <Text
          color={textColor}
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontWeight="400"
          ml={3}
          fontSize="20px"
        >
          Jonah Pflaster
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
