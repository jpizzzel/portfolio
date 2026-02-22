import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Divider,
  Code
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Image from 'next/image'
import ee31 from '../../public/ee31.jpeg'

const Work = () => (
  <Layout title="EE31 Junior Design Project">
    <Container pt={6}>
      <Title>
        EE31 Junior Design Project <Badge>2025</Badge>
      </Title>
      <Heading as="h3" fontSize={20} mb={4} fontWeight="normal">
        Autonomous Robot Navigation with WebSocket Coordination
      </Heading>
      
      <Text mb={4}>
        This was our final project for EE31, where we built a fully autonomous robot that could 
        navigate mazes, follow colored lanes, and even coordinate with another robot through 
        real-time WebSocket communication. The project pushed us to integrate hardware sensors, 
        motor control, WiFi networking, and state machine logic into one cohesive system. What 
        started as a simple line-following robot evolved into something that could handle multiple 
        navigation modes and respond to remote commands in real-time.
      </Text>

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Project Overview
        </Heading>
        <Text mb={4}>
          We built a state machine-based robot navigation system running on an Arduino Nano 33 IoT. 
          The robot connects to WiFi, establishes a WebSocket connection to a server, and then 
          operates in one of several modes based on configuration. The system supports solo navigation 
          for independent maze solving, joint navigation where two robots coordinate their progress, 
          Go Beyond mode for live remote control, and a calibration menu for tuning parameters on 
          the fly.
        </Text>
        <Text mb={4}>
          The real challenge wasn't just getting the robot to move, it was making all these systems 
          work together reliably. Color detection had to be consistent across different lighting 
          conditions, WebSocket messages had to arrive in time for coordination, and the state 
          machine had to handle edge cases without getting stuck. We spent a lot of time debugging 
          timing issues and fine-tuning thresholds.
        </Text>
      </Box>

      <Box my={6}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>GitHub Repository</Meta>
            <Link href="https://github.com/jpizzzel/Junior-Design-Project">
              jpizzzel/Junior-Design-Project <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>WebSocket Web Interface</Meta>
            <Link href="https://github.com/jpizzzel/ee31_websocket_page">
              ee31_websocket_page <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Arduino Nano 33 IoT (WiFiNINA)</span>
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <span>C++ (Arduino)</span>
          </ListItem>
          <ListItem>
            <Meta>Key Libraries</Meta>
            <span>WiFiNINA, ArduinoHttpClient, WebSocketClient</span>
          </ListItem>
          <ListItem>
            <Meta>Contributors</Meta>
            <span>Paul, Michael, Jonah, Daniel</span>
          </ListItem>
        </List>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Hardware Setup
        </Heading>
        <Text mb={4}>
          The robot uses a fairly standard setup, but getting everything wired correctly and 
          positioned right took some trial and error. We have an IR distance sensor on pin A2 for 
          wall detection, a color sensor reading analog values on A1, and red and blue LEDs on pins 1 
          and 2 for illumination. The motor driver uses an H-bridge configuration with PWM control 
          for speed and direction. There's also a buzzer on pin 11 for the horn feature in Go Beyond 
          mode.
        </Text>
        <Text mb={4}>
          The color sensing setup was particularly tricky. We toggle between red and blue LED 
          illumination, take readings with each, and use those values to classify the color. The 
          thresholds are hardcoded, so lighting and sensor placement matter a lot. We spent hours 
          calibrating this in different lighting conditions to get consistent results.
        </Text>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Navigation Modes
        </Heading>
        <Text mb={4}>
          The robot supports four main navigation modes, selected via the <Code>NAV_TYPE</Code> 
          parameter during calibration:
        </Text>
        
        <Table variant="simple" size="sm" mt={4} mb={4}>
          <Thead>
            <Tr>
              <Th>NAV_TYPE</Th>
              <Th>Mode</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">1 or 2</Td>
              <Td>Solo Navigation</Td>
              <Td>Independent maze solving following colored lanes</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">3 or 4</Td>
              <Td>Joint Navigation</Td>
              <Td>Two robots coordinate progress through server messages</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">5</Td>
              <Td>Go Beyond</Td>
              <Td>Live remote control via WebSocket commands</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">9</Td>
              <Td>Milestone Demo</Td>
              <Td>Special demo mode for presentations</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box my={6}>
        <Heading as="h4" fontSize={16} mb={3}>
          Solo Navigation
        </Heading>
        <Text mb={4}>
          In solo mode, the robot executes a fixed route using three main functions. 
          <Code>goForwardUntilWall()</Code> drives forward until the IR sensor detects a wall. 
          <Code>goForwardUntilColor(targetColor)</Code> drives until it reaches a specific color 
          marker. <Code>followColorUntilWall(targetColor)</Code> attempts to follow a colored lane, 
          adjusting its path to stay on track, and stops when it hits a wall. Turning is controlled 
          by <Code>pivot_delay_90</Code>, which we could tune via the calibration menu. Getting 
          the turn timing right was crucial. Too short and it would miss turns, too long and it 
          would overshoot.
        </Text>
      </Box>

      <Box my={6}>
        <Heading as="h4" fontSize={16} mb={3}>
          Joint Navigation
        </Heading>
        <Text mb={4}>
          This was the most interesting mode. Two robots coordinate their progress through WebSocket 
          messages. Bot 1 sends signals like <Code>B1:START</Code>, <Code>B1:AT_RED</Code>, 
          <Code>B1:ACK_AT_BLUE</Code>, and <Code>B1:HOME</Code>. Bot 2 sends <Code>B2:START</Code>, 
          <Code>B2:AT_BLUE</Code>, and <Code>B2:HOME</Code>. Each bot waits for the other's milestone 
          message before proceeding. The timing had to be perfect. If one robot sent a message but 
          the other wasn't listening, they'd get out of sync and the whole coordination would break 
          down. We added a lot of error handling and retry logic to make this robust.
        </Text>
      </Box>

      <Box my={6}>
        <Heading as="h4" fontSize={16} mb={3}>
          Go Beyond Mode
        </Heading>
        <Text mb={4}>
          Go Beyond mode turns the robot into a remotely controlled vehicle. It continuously reads 
          WebSocket messages and maps keywords to motion commands: <Code>FORWARD</Code>, 
          <Code>BACKWARD</Code>, <Code>LEFT</Code>, <Code>RIGHT</Code>, <Code>HONK</Code>, and 
          <Code>STOP</Code> (which exits the mode). If no recognized movement keyword is present, 
          the robot defaults to stopping. This mode was fun to demo. We built a web interface that 
          let people control the robot in real-time, and the low latency of WebSocket made it feel 
          pretty responsive.
        </Text>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Calibration Menu
        </Heading>
        <Text mb={4}>
          After connecting to the WebSocket server, the robot enters a calibration menu that's 
          completely driven by WebSocket commands. This was a game-changer for testing. We could 
          adjust parameters without re-uploading code. The menu accepts commands like <Code>IR</Code> 
          to set the IR limit threshold, <Code>SPEED</Code> to adjust navigation speed, 
          <Code>TYPE</Code> to select navigation mode, and <Code>PIVOT</Code> to tune turn timing. 
          Each command opens a small loop that accepts a numeric value or <Code>CANCEL</Code> to keep 
          the current setting. Sending <Code>START</Code> exits calibration and begins navigation.
        </Text>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Color Classification
        </Heading>
        <Text mb={4}>
          The color detection system maps readings to four color codes: 0 for red, 1 for blue, 2 for 
          yellow, and 3 for black. The <Code>findColor()</Code> function toggles the red and blue 
          LEDs, takes readings with each, and compares against hardcoded thresholds. This approach 
          worked, but it was sensitive to lighting conditions. We had to recalibrate whenever we 
          moved to a different room or changed the ambient lighting. In a production system, we'd 
          probably want adaptive thresholds or a more sophisticated color detection algorithm, but 
          for this project, the hardcoded values worked well enough once we found the right numbers.
        </Text>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          WebSocket Communication
        </Heading>
        <Text mb={4}>
          The WebSocket integration was crucial for both coordination and remote control. Most 
          outbound messages are sent in the format <Code>CLIENT_ID | payload</Code>, which lets the 
          server identify which robot sent the message. Incoming messages get cleaned by 
          <Code>extractPayload()</Code>, so our logic typically compares against simple payload 
          strings. We ran the server either locally using Docker or on a class server, and the robot 
          had to connect to the server's LAN IP (not localhost, since the Arduino is a different 
          device on the network).
        </Text>
        <Text mb={4}>
          Debugging WebSocket communication was interesting. We printed raw messages and extracted 
          payloads over Serial, which helped us catch issues like message formatting problems or 
          timing mismatches. The Serial output became our primary debugging tool. We could see 
          exactly what messages were being sent and received, which made it much easier to track 
          down coordination bugs.
        </Text>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Challenges and Solutions
        </Heading>
        <Text mb={4}>
          One of the biggest challenges was getting reliable color detection. Lighting changes would 
          shift our thresholds, and we'd have to adjust the hardcoded values. We ended up spending 
          a lot of time repositioning LEDs, adjusting sensor distance and angle, and testing in 
          different lighting conditions to find thresholds that worked consistently.
        </Text>
        <Text mb={4}>
          Turn accuracy was another pain point. The <Code>pivot_delay_90</Code> parameter controlled 
          how long the robot turned, but battery level and surface friction could change turn timing 
          significantly. We made the calibration menu specifically to address this. Being able to 
          tune turn timing on the fly without re-uploading code saved us a lot of time during testing.
        </Text>
        <Text mb={4}>
          WebSocket connectivity issues were frustrating at first. The Arduino couldn't connect to 
          localhost, so we had to use the laptop's LAN IP. We also had to make sure the server was 
          actually listening on the correct port and that both devices were on the same WiFi network. 
          Once we got the networking right, the WebSocket communication was surprisingly reliable.
        </Text>
      </Box>

      <Box my={6}>
        <Image
          src={ee31}
          alt="EE31 Junior Design Project Robot"
          width={1000}
          height={600}
          style={{ borderRadius: '8px', marginTop: '20px' }}
        />
      </Box>

      <Divider my={6} />

      <Box my={6} p={4} bg="gray.50" borderRadius="md" _dark={{ bg: "gray.800" }}>
        <Heading as="h3" fontSize={18} mb={4}>
          What I Learned
        </Heading>
        <Heading as="h4" fontSize={16} mb={3} fontWeight="bold">
          Integration is Harder Than Individual Components
        </Heading>
        <Text mb={4}>
          Each piece of this project (color detection, motor control, WebSocket communication, state 
          machine logic) worked fine in isolation. But getting them all to work together reliably was 
          the real challenge. Timing issues would cause the state machine to get stuck, WebSocket 
          message delays would break coordination, and sensor noise would throw off navigation. This 
          project taught me that system integration requires thinking about how all the pieces 
          interact, not just whether each piece works on its own. It also reinforced the importance 
          of good debugging tools. The Serial output and WebSocket message logging were essential 
          for understanding what was actually happening when things went wrong.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'