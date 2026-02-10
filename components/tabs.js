import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LuBriefcase, LuSchool } from "react-icons/lu";

const workItems = [
  {
    dates: "May 2025 – Present",
    organization: "Watershed Ventures",
    role: "AI Software Engineering Intern",
    details: [
      "https://watershed.vc/",
      "Developing a multi-agent AI system that automates VC research, data enrichment, database management, and memo generation.",
      "Reducing manual research and data entry time by over 90% while maintaining real-time startup data quality.",
      "Utilzing: Python, Supabase, AWS, Next.js, Postgres.",
    ],
  },
  {
    dates: "Sept 2025 – Dec 2025",
    organization: "Tufts University",
    role: "CS Teaching Assistant",
    details: [
      "TA for the CS 11: C++ course.",
    ],
  },
  {
    dates: "Jun 2024 – Aug 2024",
    organization: "SoundSense",
    role: "Engineering Intern",
    details: [
      "https://www.soundsense.com/",
      "Shadowed a senior engineer across project management, consulting, and data analysis.",
    ],
  },
];

const educationItems = [
  {
    dates: "Expected 2027",
    organization: "Tufts University",
    role: "B.S. in Computer Engineering",
    details: [ "JumboCode Developer", "EWB Tech Group Lead", "Club Soccer Captain", "Chess Club Treasurer"
      ],
  },
];

const ExperienceSection = ({ title, icon: IconComponent, items }) => {
  const cardBg = useColorModeValue("white", "#1c1c1e");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      borderWidth="1px"
      borderColor={cardBorder}
      borderRadius="lg"
      p={4}
      mb={6}
      bg={cardBg}
      boxShadow="sm"
    >
      <HStack spacing={2} mb={2}>
        {IconComponent && (
          <Box
            as={IconComponent}
            boxSize={4}
            color="#d4ac0d"
          />
        )}
        <Heading as="h3" size="sm" color={headingColor}>
          {title}
        </Heading>
      </HStack>

      <Accordion allowMultiple border="none">
        {items.map((item) => (
          <AccordionItem key={`${item.organization}-${item.dates}`} border="none">
            <h2>
              <AccordionButton px={0} py={3}>
                <HStack
                  w="full"
                  align="flex-start"
                  justify="space-between"
                  spacing={4}
                >
                  <Stack spacing={0} align="flex-start">
                    <Text fontWeight="semibold">{item.organization}</Text>
                    <Text fontSize="sm" color={muted}>
                      {item.role}
                    </Text>
                  </Stack>
                  <Text
                    fontSize="sm"
                    color={muted}
                    textAlign="right"
                    whiteSpace="nowrap"
                  >
                    {item.dates}
                  </Text>
                </HStack>
                <AccordionIcon ml={2} />
              </AccordionButton>
            </h2>
            {item.details && item.details.length > 0 && (
              <AccordionPanel px={0} pt={0} pb={3}>
                <Stack spacing={1}>
                  {item.details.map((line, idx) => (
                    <Text key={idx} fontSize="sm" color={muted}>
                      {line}
                    </Text>
                  ))}
                </Stack>
              </AccordionPanel>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

// Main Component
const TabsW = () => {
  return (
    <Box maxW="lg">
      <ExperienceSection
        title="Work"
        icon={LuBriefcase}
        items={workItems}
      />
      <ExperienceSection
        title="Education"
        icon={LuSchool}
        items={educationItems}
      />
    </Box>
  );
};

export default TabsW;
