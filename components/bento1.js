import React from 'react';
import { Box, Grid, Stack, Badge, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image'; // Next.js Image component for static assets
import NextLink from 'next/link'; // For navigation
import watershed from "../public/watershed.png";
import Leg64 from "../public/leg64.png";
import smoosh_bros from "../public/smoosh_bros.jpeg";

const FeaturedProjects = () => {
  const projects = [
    {
      id: 'watershed-ai',
      title: 'Multi System AI Agent',
      description: 'Automated venture capital research and data enrichment system using multi-agent AI architecture.',
      thumbnail: watershed,
      badges: ["Python", "Supabase", "AWS", "Nextjs"],
      href: '/projects/watershed-ai', 
    },
    {
      id: 'arm-legv8-processor',
      title: 'Arm Legv8 Processor',
      description: 'A 64-bit ARM LEGv8 Processor in VHDL',
      thumbnail: Leg64,
      badges: ["VHDL", "Computer Architecture"],
      href: '/projects/arm-legv8-processor', 
    },
    {
      id: 'smoosh-bros',
      title: 'Smoosh Bros',
      description: 'A Super Smash Bros-style fighting game built entirely in SystemVerilog on an FPGA',
      thumbnail: smoosh_bros,
      badges: ["System Verilog", "FPGA", "Game Development"],
      href: '/projects/smoosh-bros', 
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
