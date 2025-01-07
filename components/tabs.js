import {
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  VStack,
  Circle,
} from "@chakra-ui/react";
import { LuBookText, LuSchool, LuFileChartColumnIncreasing, LuChartNetwork, LuComputer } from "react-icons/lu";

// Timeline Components
export const TimelineRoot = ({ children, ...props }) => (
  <VStack align="stretch" spacing={6} {...props}>
    {children}
  </VStack>
);

export const TimelineItem = ({ children, ...props }) => (
  <Flex align="flex-start" {...props}>
    {children}
  </Flex>
);

export const TimelineConnector = ({ icon, ...props }) => (
  <Circle size="10" bg="#d4ac0d" color="white" {...props}>
    {icon}
  </Circle>
);

export const TimelineContent = ({ children, ...props }) => (
  <Box flex="1" pl={4} {...props}>
    {children}
  </Box>
);

export const TimelineTitle = ({ children, ...props }) => (
  <Text fontSize="lg" fontWeight="bold" {...props}>
    {children}
  </Text>
);

export const TimelineDescription = ({ children, ...props }) => (
  <Text fontSize="sm" color="gray.600" {...props}>
    {children}
  </Text>
);

export const JobDescription = ({ children, ...props }) => (
  <Text fontSize="md" fontWeight="bold" {...props}>
    {children}
  </Text>
);

// Main Component
const TabsW = () => {
  return (
    <Tabs
      variant="unstyled"
      maxW="lg"
      defaultIndex={0}
      align="start"
      orientation="horizontal"
    >
      <TabList
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on smaller screens
        bg="white"
        _dark={{ bg: "#1c1c1e", borderColor: "gray.700" }}
        rounded="lg"
        p={1}
        shadow="md"
        border="1px solid"
        borderColor="gray.300"
        >
        <Tab
            _selected={{ bg: "#d4ac0d", color: "white", shadow: "sm" }}
            px={{ base: 8, md: 24 }} // Adjust padding for smaller screens
            py={1}
            rounded="md"
            display="flex"
            alignItems="center"
            gap={1}
        >
            Work
        </Tab>
        <Tab
            _selected={{ bg: "#d4ac0d", color: "white", shadow: "sm" }}
            px={{ base: 8, md: 24 }} // Adjust padding for smaller screens
            py={1}
            rounded="md"
            display="flex"
            alignItems="center"
            gap={0}
        >
            Education
        </Tab>
        </TabList>
      <TabPanels
        mt={4}
        rounded="lg"
        p={4}
        shadow="md"
        border="1px"
        borderColor="gray.300"
        bg="white"
        _dark={{ bg: "#1c1c1e", borderColor: "gray.700" }}
        overflow="hidden"
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0px 4px 15px #d4ac0d',
        }}
      >
        {/* Work Experience Tab */}
        <TabPanel>
          <TimelineRoot>
            <TimelineItem>
              <TimelineConnector icon={<LuComputer />} />
              <TimelineContent>
                <TimelineDescription>Sept 2024 - Present</TimelineDescription>
                <TimelineTitle>JumboCode</TimelineTitle>
                <JobDescription>Full Stack Engineer</JobDescription>
                <Text>
                    - Building pro-bono web and mobile apps for nonprofit clients, working on both Frontend and Backend software development
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector icon={<LuChartNetwork />} />
              <TimelineContent>
                <TimelineDescription>Aug 2024 - Present</TimelineDescription>
                <TimelineTitle>Engineers Without Borders</TimelineTitle>
                <JobDescription>Data Analytics Tech Group Lead</JobDescription>
                <Text>
                    - I manage a group of 10-20 undergraduate engineers for a non-profit organization dedicated to building a better world
                </Text>
                    
                <Text>
                    - Technologies we use include arduinos, raspberrypis, CAD software, github and python
                </Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector icon={<LuFileChartColumnIncreasing />} />
              <TimelineContent>
                <TimelineDescription>Jun 2024 - Aug 2024</TimelineDescription>
                <TimelineTitle>SoundSense</TimelineTitle>
                <JobDescription>Engineering Intern</JobDescription>
                <Text>
                    - Shadowing a senior engineer in project management, consulting, data anaylsis and more
                </Text>
              </TimelineContent>
            </TimelineItem>

          </TimelineRoot>
        </TabPanel>

        {/* Education Tab */}
        <TabPanel>
          <TimelineRoot>
            <TimelineItem>
              <TimelineConnector icon={<LuBookText />} />
              <TimelineContent>
                <TimelineDescription>Expected 2027</TimelineDescription>
                <TimelineTitle>Bachelors Degree in Computer Engineering</TimelineTitle>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector icon={<LuSchool />} />
              <TimelineContent>
                <TimelineDescription>2019 - 2023</TimelineDescription>
                <TimelineTitle>Earl L. Vandermeulen High School</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsW;
