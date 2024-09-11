import { Grid, GridItem, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { FaUser, FaBriefcase, FaLaptopCode, FaFutbol, FaClipboard, FaEarlybirds } from 'react-icons/fa';
import { useState } from 'react';

const BentoGrid = () => {
  const [expanded, setExpanded] = useState(null); // Track expanded item
  const bgBio = useColorModeValue('#fafafa', 'charcoal');
  const bgProject = useColorModeValue('#fafafa', 'charcoal');
  const bgHobby = useColorModeValue('#fafafa', 'charcoal');

  // Handle item click
  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expansion
  };

  // Function to determine grid item size
  const getItemSize = (index) => {
    if (expanded === index) {
      return { transform: 'scale(1.1)', zIndex: 1 }; // Expanded style
    }
    return expanded !== null ? { transform: 'scale(0.9)', opacity: 0.6 } : {}; // Shrink others
  };

  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      gap={8}
      p={5}
      bg={useColorModeValue('#fafafa', '#1c1c1e')}
      borderRadius="lg"
      boxShadow="2xl"
    >
      {/* Top Row */}
      <GridItem colSpan={[6, 3]} rowSpan={1}>
        <Box
          bg={bgBio}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(0)}
          style={getItemSize(0)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaUser style={{ display: 'inline-block', marginRight: '8px' }} />
            About
          </Heading>
          <Text fontSize="md">
            I am Jonah Pflaster, a Mechanical Engineering Major and Computer Science Minor. 
            I love solving problems that deal with both the physical and digital world.
          </Text>
        </Box>
      </GridItem>

      <GridItem colSpan={[6, 3]} rowSpan={1}>
        <Box
          bg={bgProject}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(1)}
          style={getItemSize(1)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaBriefcase style={{ display: 'inline-block', marginRight: '8px' }} />
            Education
          </Heading>
          <Text fontSize="md">
            Graduated from Earl L. Vandermuelen High School in Spring of 2023. 
            Now I am current sophomore at Tufts University School of Engineering
            and expect to graduate spring of 2027.
          </Text>
        </Box>
      </GridItem>

      <GridItem colSpan={[6, 6]} rowSpan={2}>
        <Box
          bg={bgProject}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(2)}
          style={getItemSize(2)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaLaptopCode style={{ display: 'inline-block', marginRight: '8px' }} />
            Skills/Projects
          </Heading>
          <Text fontSize="md">
            I love working on projects that deal with web development, 3D printing,
            programming, design, and more! You can find out more about specific projects,
            experiences, and skills on both my works page and/or in my resume.
          </Text>
        </Box>
      </GridItem>

      {/* Middle Row */}
      <GridItem colSpan={[6]} rowSpan={1}>
        <Box
          bg={bgHobby}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(3)}
          style={getItemSize(3)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaFutbol style={{ display: 'inline-block', marginRight: '8px' }} />
            Hobbies
          </Heading>
          <Text fontSize="md">
            I love to stay active and competitive. I am a part of the Tufts Club
             soccer team and also enjoy playing basketball, going surfing and skiing.
            When I am not doing one of those I am probably inside experimenting with 
            new technologies, playing chess, or just learning something new such as AI, 3D printing, or coding.
          </Text>
        </Box>
      </GridItem>

      {/* Bottom Row */}
      <GridItem colSpan={[6, 3]} rowSpan={1}>
        <Box
          bg={bgBio}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(4)}
          style={getItemSize(4)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaClipboard style={{ display: 'inline-block', marginRight: '8px' }} />
            Goals/Future
          </Heading>
          <Text fontSize="md">
            Currently I would like to finish up my project, CalendarConnect. Next summer I want to gain more work experience in an engineering field.
          </Text>
        </Box>
      </GridItem>

      <GridItem colSpan={[6, 3]} rowSpan={3}>
        <Box
          bg={bgProject}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(5)}
          style={getItemSize(5)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaLaptopCode style={{ display: 'inline-block', marginRight: '8px' }} />
            Latest Project
          </Heading>
          <Text fontSize="md">
            CalendarConnect is the project that I have been developing for the past few months and will hopefully have finished soon. It is a website with the main goal of connecting universities academic calendars all in one easily accessible place. You can find more info on CalendarConnect as well as the link in the works page.
          </Text>
        </Box>
      </GridItem>

      <GridItem colSpan={[6, 3]}>
        <Box
          bg={bgBio}
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          onClick={() => handleExpand(6)}
          style={getItemSize(6)}
          _hover={{ transform: 'scale(1.05)', transition: 'all 0.3s' }}
          transition="all 0.5s ease"
          cursor="pointer"
        >
          <Heading as="h3" variant="section-title" mb={4}>
            <FaEarlybirds style={{ display: 'inline-block', marginRight: '8px' }} />
              Need Help?
          </Heading>
          <Text fontSize="md">
            Go to Contact Page or email me at Jonah.pflaster@tufts.edu.
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default BentoGrid;
