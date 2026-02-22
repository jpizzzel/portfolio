import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import logoImage from './logo.png'

const Logo = () => {
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
          '&:hover img': {
            transform: 'rotate(20deg)',
          },
        }}
      >
        <Image src={logoImage} width={20} height={20} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="var(--font-m-plus-rounded), sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Jonah Pflaster
        </Text>
      </Box>
    </Link>
  )
}

export default Logo
