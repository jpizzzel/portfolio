import { Box, Stack, Badge, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const ProjectCard = ({ href, title, description, thumbnail, badges, external }) => {
  const cardBg = useColorModeValue('white', 'rgba(255, 255, 255, 0.03)')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const descColor = useColorModeValue('gray.600', 'gray.400')

  const linkProps = external
    ? { as: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
    : { as: NextLink, href, scroll: false }

  return (
    <Box
      {...linkProps}
      display="block"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      bg={cardBg}
      overflow="hidden"
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-4px)',
        borderColor: 'brand.400',
        boxShadow: '0 8px 25px rgba(0, 181, 216, 0.15)',
      }}
    >
      {/* Image area */}
      <Box
        w="100%"
        h="180px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        bg={useColorModeValue('gray.50', 'rgba(255, 255, 255, 0.02)')}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={400}
          height={180}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Box>

      {/* Content */}
      <Box p={5}>
        <Heading size="sm" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color={descColor} noOfLines={2} mb={3}>
          {description}
        </Text>
        <Stack direction="row" spacing={2} wrap="wrap">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              colorScheme="cyan"
              fontSize="0.7em"
              px={2}
              py={0.5}
              borderRadius="full"
            >
              {badge}
            </Badge>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default ProjectCard
