import { useState, useRef } from 'react'
import {
  Box,
  Flex,
  Text,
  Badge,
  Stack,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

const ProjectListItem = ({
  href,
  title,
  description,
  thumbnail,
  badges,
  external,
  year,
  archived,
  index = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const borderColor = useColorModeValue('sand.200', 'sand.800')
  const hoverBg = useColorModeValue('sand.50', 'rgba(36, 31, 26, 0.5)')
  const descColor = useColorModeValue('sand.500', 'sand.400')
  const accentBorder = useColorModeValue('brand.400', 'brand.300')
  const archivedBg = useColorModeValue('sand.200', 'sand.800')
  const archivedColor = useColorModeValue('sand.600', 'sand.400')
  const chevronColor = useColorModeValue('sand.400', 'sand.600')
  const yearColor = useColorModeValue('sand.500', 'sand.400')
  const imgBorderColor = useColorModeValue('sand.200', 'sand.800')
  const titleHover = useColorModeValue('brand.500', 'brand.200')

  const linkProps = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  const LinkWrapper = external ? 'a' : NextLink

  return (
    <Box
      borderBottom="1px solid"
      borderColor={borderColor}
      transition="background 0.2s ease"
      _hover={{ bg: hoverBg }}
      position="relative"
    >
      {/* Main row */}
      <Flex
        align="center"
        py={4}
        px={{ base: 2, md: 4 }}
        cursor="pointer"
        onClick={() => setIsOpen(!isOpen)}
        gap={{ base: 3, md: 4 }}
        role="button"
        aria-expanded={isOpen}
        userSelect="none"
      >
        {/* Expand chevron */}
        <Box
          as={motion.div}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          flexShrink={0}
          color={chevronColor}
          fontSize="12px"
          w="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1L7 5L3 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>

        {/* Left accent bar - visible when expanded */}
        <Box
          w="3px"
          alignSelf="stretch"
          borderRadius="full"
          bg={isOpen ? accentBorder : 'transparent'}
          transition="background 0.3s ease"
          flexShrink={0}
        />

        {/* Title - clickable link to project page */}
        <LinkWrapper
          href={href}
          scroll={false}
          {...linkProps}
          onClick={(e) => e.stopPropagation()}
          style={{ textDecoration: 'none' }}
        >
          <Text
            fontFamily="heading"
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="400"
            transition="color 0.2s ease"
            _hover={{
              color: titleHover,
            }}
            lineHeight="1.3"
          >
            {title}
          </Text>
        </LinkWrapper>

        {/* Preview tags - visible before expanding */}
        <Flex
          align="center"
          gap={1.5}
          display={{ base: 'none', md: 'flex' }}
          flexShrink={1}
          minW={0}
          overflow="hidden"
        >
          {badges &&
            badges
              .filter((b) => b !== 'In Progress')
              .slice(0, 3)
              .map((badge, i) => (
                <Badge
                  key={i}
                  bg="transparent"
                  border="1px solid"
                  borderColor={useColorModeValue('sand.300', 'sand.700')}
                  color={descColor}
                  fontSize="0.6em"
                  fontWeight="400"
                  px={1.5}
                  py={0}
                  borderRadius="3px"
                  fontFamily="body"
                  textTransform="lowercase"
                  letterSpacing="0.02em"
                  whiteSpace="nowrap"
                >
                  {badge}
                </Badge>
              ))}
        </Flex>

        {/* Spacer */}
        <Box flex={1} />

        {/* Status & year - right side */}
        <Flex align="center" gap={2} flexShrink={0}>
          {archived && (
            <Badge
              bg={archivedBg}
              color={archivedColor}
              fontSize="0.65em"
              fontWeight="500"
              fontFamily="body"
              textTransform="lowercase"
              px={2}
              py={0.5}
              borderRadius="4px"
              letterSpacing="0.02em"
            >
              archived
            </Badge>
          )}

          {badges && badges.includes('In Progress') && (
            <Badge
              bg="transparent"
              border="1px solid"
              borderColor="gold.400"
              color={useColorModeValue('gold.600', 'gold.300')}
              fontSize="0.65em"
              fontWeight="500"
              fontFamily="body"
              textTransform="lowercase"
              px={2}
              py={0.5}
              borderRadius="4px"
              letterSpacing="0.02em"
            >
              in progress
            </Badge>
          )}

          {year && (
            <Text
              color={yearColor}
              fontFamily="var(--font-caveat), cursive"
              fontSize="sm"
              flexShrink={0}
              display={{ base: 'none', sm: 'block' }}
            >
              {year}
            </Text>
          )}
        </Flex>
      </Flex>

      {/* Expanded content */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          pl={{ base: '35px', md: '47px' }}
          pr={{ base: 2, md: 4 }}
          pb={5}
        >
          <Flex
            gap={5}
            direction={{ base: 'column', md: 'row' }}
            align="flex-start"
          >
            {/* Thumbnail */}
            {thumbnail && (
              <Box
                flexShrink={0}
                w={{ base: '100%', md: '180px' }}
                h={{ base: '140px', md: '110px' }}
                borderRadius="8px"
                overflow="hidden"
                border="1px solid"
                borderColor={imgBorderColor}
                position="relative"
              >
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            )}

            {/* Text content */}
            <Box flex={1} minW={0}>
              <Text
                fontSize="sm"
                color={descColor}
                lineHeight="1.7"
                mb={3}
              >
                {description}
              </Text>

              {/* Tech badges */}
              <Stack direction="row" spacing={2} wrap="wrap">
                {badges &&
                  badges
                    .filter((b) => b !== 'In Progress')
                    .map((badge, i) => (
                      <Badge
                        key={i}
                        bg="sunset.400"
                        color="white"
                        fontSize="0.65em"
                        fontWeight="500"
                        px={2}
                        py={0.5}
                        borderRadius="4px"
                        fontFamily="body"
                        textTransform="lowercase"
                        letterSpacing="0.02em"
                      >
                        {badge}
                      </Badge>
                    ))}
              </Stack>

              {/* View project link */}
              <Box mt={3}>
                <LinkWrapper
                  href={href}
                  scroll={false}
                  {...linkProps}
                  style={{ textDecoration: 'none' }}
                >
                  <Text
                    as="span"
                    fontSize="xs"
                    color={useColorModeValue('brand.400', 'brand.300')}
                    fontFamily="body"
                    fontWeight="500"
                    letterSpacing="0.03em"
                    transition="color 0.2s ease"
                    _hover={{
                      color: titleHover,
                      textDecoration: 'underline',
                      textDecorationStyle: 'wavy',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {external ? 'visit site' : 'view project'} &rarr;
                  </Text>
                </LinkWrapper>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  )
}

export default ProjectListItem
