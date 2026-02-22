import { Box, Stack, Badge, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

const rotations = [-0.5, 0.3, -0.2, 0.4, -0.3]
const badgeRotations = [-2, 1.5, -1, 2.5, -1.5, 2]

const ProjectCard = ({ href, title, description, thumbnail, badges, external, index = 0 }) => {
  const cardBg = useColorModeValue('#FFFFFF', '#241F1A')
  const borderColor = useColorModeValue('#E8DCD0', '#3D352C')
  const descColor = useColorModeValue('#8B7D6B', '#A89882')
  const shadowColor = useColorModeValue('#D4C4B0', '#3D352C')
  const rotation = rotations[index % rotations.length]

  const linkProps = external
    ? { as: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
    : { as: NextLink, href, scroll: false }

  return (
    <Box
      {...linkProps}
      display="block"
      border="2px solid"
      borderColor={borderColor}
      borderRadius="12px"
      bg={cardBg}
      overflow="hidden"
      transition="all 0.3s ease"
      transform={`rotate(${rotation}deg)`}
      _hover={{
        transform: 'rotate(0deg) translateY(-4px)',
        borderColor: 'brand.400',
        boxShadow: `4px 4px 0 ${shadowColor}`,
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
        bg={useColorModeValue('sand.50', 'sand.900')}
        borderBottom="2px dashed"
        borderColor={borderColor}
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
          {badges.map((badge, i) => (
            <Badge
              key={i}
              bg="sunset.400"
              color="white"
              fontSize="0.7em"
              px={2}
              py={0.5}
              borderRadius="full"
              transform={`rotate(${badgeRotations[i % badgeRotations.length]}deg)`}
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
