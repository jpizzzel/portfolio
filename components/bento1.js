import React from 'react';
import { Box, Grid, Stack, Badge, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image'; // Next.js Image component for static assets
import NextLink from 'next/link'; // For navigation
import calendar from "../public/CalendarSS.png";
import Cplus from "../public/c++_logo.png";
import CAD from "../public/CAD_GEN.png";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'AI-CAD',
      title: 'AI-CAD Project Builder',
      description: 'Utilized AI to better develop CAD models.',
      thumbnail: CAD,
      badges: ["AI", "Hugging Face", "Python"],
      href: '/projects/AI-CAD', 
    },
    {
      id: 'cplus',
      title: 'C++ Projects',
      description: 'Exploring Data Structures and Algorithms through C++.',
      thumbnail: Cplus,
      badges: ["C++", "Algorithms", "Data Structures"],
      href: '/projects/cplus', // Link to the C++ Projects page
    },
    {
      id: 'calendar',
      title: 'Calendar Connect',
      description: 'A web app to compare academic calendars across universities.',
      thumbnail: calendar,
      badges: ["React", "Full-Stack", "Data Organization"],
      href: '/projects/calendar', // Link to the Calendar Connect page
    },
  ];

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={8} p={4}>
      {projects.map((project) => (
        <Box
          key={project.id}
          as={NextLink} // Use Next.js Link here
          href={project.href} // Link to the page
          scroll={false}
          p={5}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
          _dark={{ bg: '#1c1c1e', borderColor: 'gray.700' }}
          overflow="hidden"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0px 4px 15px #d4ac0d',
          }}
        >
          <Stack align="center" spacing={4}>
            {/* Thumbnail */}
            <Box
              w="100%"
              h="180px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              overflow="hidden"
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={300}
                height={140}
                objectFit="contain"
              />
            </Box>
            {/* Title */}
            <Heading size="md" textAlign="center">
              {project.title}
            </Heading>
            {/* Description */}
            <Text fontSize="sm" textAlign="center" color="gray.600">
              {project.description}
            </Text>
            {/* Badges */}
            <Stack direction="row" spacing={2} justify="center" wrap="wrap">
              {project.badges.map((badge, index) => (
                <Badge
                  key={index}
                  colorScheme="teal"
                  fontSize="0.8em"
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {badge}
                </Badge>
              ))}
            </Stack>
          </Stack>
        </Box>
      ))}
    </Grid>
  );
};

export default FeaturedProjects;
