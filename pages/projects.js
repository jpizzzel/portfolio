import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Badge,
  Stack,
  Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import calendars from "../public/searchSS.png";
import portfo from "../public/logo.png";
import { WorkGridItem } from "../components/grid-item";
import wate from "../public/ewbim.png";
import jcode from "../public/jumbocode.png";
import Cplus from "../public/c++_logo.png";

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={24} mb={6} textAlign="center">
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing={8}>
        {[
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
