import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Badge,
  Stack,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import calendars from "../public/searchSS.png";
import portfo from "../public/logo.png";
import { WorkGridItem } from "../components/grid-item";
import wate from "../public/ewbim.png";
import jcode from "../public/jumbocode.png";
import Cplus from "../public/c++_logo.png";
import table from "../public/foosball.jpg";
import arm from "../public/leg64.png";
import ee31 from "../public/ee31.jpeg";
import CAD from "../public/CAD_GEN.png";
import smoosh from "../public/smoosh_bros.jpeg";
import hand from "../public/hj.jpg";
import watershed from "../public/watershed.png";
import studentLifeManager from "../public/student_life_manager.png";

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={24} mb={6} textAlign="center">
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        {[
        {
          id: "arm-legv8-processor",
          title: "64-bit ARM LEGv8 Processor",
          description: "VHDL implementation of a LEGv8 Processor",
          thumbnail: arm,
          badges: ["VHDL", "Computer Architecture"],
        },
        {
          id: "smoosh-bros",
          title: "Smoosh Bros",
          description: "A Super Smash Bros-style fighting game built entirely in SystemVerilog on an FPGA",
          thumbnail: smoosh, // placeholder
          badges: ["SystemVerilog", "FPGA", "Game Development"],
        },
        {
          id: "junior-design-project",
          title: "EE31 Junior Design Project",
          description: "Autonomous robot with WebSocket communication and sensor system",
          thumbnail: ee31, // placeholder
          badges: ["Arduino", "WebSocket", "Embedded Systems"],
        },
        {
          id: "student-life-organizer",
          title: "Student Life Organizer",
          description: "Personal student life management system with Canvas, Google Drive, Calendar, and Gmail integrations for optimized workflows.",
          thumbnail: studentLifeManager,
          badges: ["Next.js", "Automation", "Productivity"],
        },
        {
          id: "watershed-ai",
          title: "Multi System AI Agent",
          description: "Automated venture capital research and data enrichment system using multi-agent AI architecture.",
          thumbnail: watershed,
          badges: ["AI", "Multi-Agent", "Python", "Supabase"],
        },
        {
          id: "HandJam",
          title: "HandJam",
          description: "Created an instrument using Machine Learning",
          thumbnail: hand,
          badges: ["ML", "Embedded Systems", "C", "Python"],
        },
          {
            id: "AI-CAD",
            title: "AI CAD Project Builder",
            description: "Utilized AI to better develop CAD models.",
            thumbnail: CAD,
            badges: ["AI", "Hugging Face", "Python"],
          },
          {
            id: "cplus",
            title: "C++ Projects",
            description: "Projects in Data Structures and Algorithms",
            thumbnail: Cplus,
            badges: ["C++", "Algorithms", "Data Structures"],
          },
          {
            id: "techlead",
            title: "EWB Tech Group Lead",
            description:
              "Leading an Engineering Without Borders tech group in developing a data retrieval and organization system for a community in Malawi.",
            thumbnail: wate,
            badges: ["Leadership", "Hardware", "Software"],
          },
          {
            id: "calendar",
            title: "Calendar Connect",
            description:
              "A website designed to help users compare academic calendars across universities.",
            thumbnail: calendars,
            badges: ["React", "Full-Stack", "Data Organization"],
          },
          {
            id: "jumbocode",
            title: "JumboCode Project",
            description:
              "Working on the Bread and Roses project for social impact.",
            thumbnail: jcode,
            badges: ["Full-Stack", "Social Impact", "Teamwork"],
          },
          {
            id: "foosball",
            title: "Foosball Table",
            description: "Designed and developed a small Foosball table",
            thumbnail: table,
            badges: ["CAD", "Mechanics", "Design"],
          },
          {
            id: "portfolio",
            title: "Portfolio Website",
            description:
              "My personal portfolio website showcasing my skills and projects.",
            thumbnail: portfo,
            badges: ["Next.js", "Chakra UI"],
          },
          {
            id: "water",
            title: "EWB Water Automation Project",
            description:
              "Assisted in the creation of the water automation system for the Malawi Greenhouse Project.",
            thumbnail: wate,
            badges: ["Automation", "Engineering", "Arduino"],
          },
          {
            id: "upcoming",
            title: "Ideas/In-progress",
            description: "Projects currently in development.",
            thumbnail: portfo,
            badges: ["Creative", "In Progress"],
          },
        ].map((item) => (
          <Section key={item.id}>
            <Box
              p={6}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="lg"
              boxShadow="lg"
              bg="white"
              _dark={{ bg: "#1c1c1e", borderColor: "gray.700" }}
              overflow="hidden"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px #d4ac0d",
              }}
              h="320px"
              w="100%"
            >
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              >
                <Stack spacing={3}>
                  <Box fontSize="sm" textAlign="center" color="gray.600">
                    {item.description}
                  </Box>
                  <Stack direction="row" spacing={2} justify="center">
                    {item.badges.map((badge, index) => (
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
              </WorkGridItem>
            </Box>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
