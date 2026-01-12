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
  SimpleGrid,
  Text,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import Layout from '../../components/layouts/article'
import Image from 'next/image'
import img from '../../public/leg64.png'

const Work = () => (
  <Layout title="5-Stage Pipelined ARM CPU">
    <Container>
      <Title>
        5-Stage Pipelined ARM CPU <Badge>2024</Badge>
      </Title>
      <Heading as="h3" fontSize={20} mb={4} fontWeight="normal">
        A 64-bit ARM LEGv8 Processor in VHDL
      </Heading>
      
      <Text mb={4}>
        This project completely changed how I think about computers. Before diving into processor 
        design, I saw CPUs as these mysterious black boxes that just worked. After building one 
        from scratch in VHDL, I finally understood what's actually happening under the hood, from 
        how instructions get decoded and executed, to the tricky problem of keeping data flowing 
        smoothly through multiple pipeline stages. It was challenging, but incredibly rewarding 
        to see my code translate into actual hardware behavior.
      </Text>

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Project Summary
        </Heading>
        <Text mb={4}>
          I built a complete 64-bit ARM LEGv8 processor implementation, starting with a simpler 
          single-cycle design to get the fundamentals right, then scaling up to a full 5-stage 
          pipelined version. The processor handles all the core instruction types you'd expect: 
          arithmetic operations between registers, immediate operations, memory loads and stores, 
          and both conditional and unconditional branches. The real challenge came with making 
          the pipeline work efficiently, I implemented data forwarding to avoid unnecessary stalls, 
          and built hazard detection logic to handle those tricky cases where one instruction 
          depends on data that's still being computed. Everything was tested extensively using 
          GHDL for simulation and GTKWave to visualize what was happening at each clock cycle.
        </Text>
      </Box>

      <SimpleGrid columns={[2, 2, 4]} spacing={4} my={6}>
        <Box textAlign="center" p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
          <Text fontSize="2xl" fontWeight="bold">5</Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>Pipeline Stages</Text>
        </Box>
        <Box textAlign="center" p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
          <Text fontSize="2xl" fontWeight="bold">64-bit</Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>Architecture</Text>
        </Box>
        <Box textAlign="center" p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
          <Text fontSize="2xl" fontWeight="bold">15</Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>Instructions</Text>
        </Box>
        <Box textAlign="center" p={4} borderRadius="md" bg="gray.50" _dark={{ bg: "gray.800" }}>
          <Text fontSize="2xl" fontWeight="bold">VHDL</Text>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>Implementation</Text>
        </Box>
      </SimpleGrid>

      <Box my={6}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies</Meta>
            <span>VHDL, GHDL, GTKWave, ARM LEGv8, Digital Logic, Computer Architecture, Pipeline Architecture</span>
          </ListItem>
        </List>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Pipeline Architecture
        </Heading>
        <Text mb={4}>
          The pipeline is split into five distinct stages, each doing its own job on a different 
          instruction every clock cycle. Between each stage, I added pipeline registers (IF/ID, 
          ID/EX, EX/MEM, MEM/WB) that act like temporary storage, holding onto all the data and 
          control signals needed for the next stage. This way, while one instruction is being 
          decoded, another is being fetched, and yet another is executing in the ALU, all at the 
          same time. It's like an assembly line, but for instructions.
        </Text>
      </Box>

      <Box my={6}>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Stage</Th>
              <Th>Name</Th>
              <Th>Function</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">IF</Td>
              <Td>Instruction Fetch</Td>
              <Td>Grab the next instruction from instruction memory using the program counter</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">ID</Td>
              <Td>Instruction Decode</Td>
              <Td>Break down the instruction, read source registers, and prepare immediate values</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">EX</Td>
              <Td>Execute</Td>
              <Td>Perform ALU operations or calculate branch target addresses</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">MEM</Td>
              <Td>Memory Access</Td>
              <Td>Read from or write to data memory for load/store instructions</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">WB</Td>
              <Td>Write Back</Td>
              <Td>Write the result back into the destination register</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Handling Data Hazards and Forwarding
        </Heading>
        <Text mb={4}>
          One of the coolest parts of this project was solving the data hazard problem. When you 
          have instructions running in parallel, sometimes an instruction needs data that the 
          previous instruction just calculated, but that result hasn't made it back to the register 
          file yet. You can't just wait around, that defeats the whole purpose of pipelining.
        </Text>
        
        <Box mt={4}>
          <Heading as="h4" fontSize={16} mb={3}>
            Data Forwarding
          </Heading>
          <Text mb={4}>
            Instead of waiting, I built forwarding paths that grab results directly from where they're 
            being computed. If the ALU just finished an operation and the next instruction needs that 
            result, we can forward it straight from the EX/MEM pipeline register. Same thing if the 
            data is coming from memory, we can forward from MEM/WB. For store instructions, I added 
            a special forwarding path so we can write the correct value to memory even if it was 
            just computed.
          </Text>
        </Box>

        <Box mt={4}>
          <Heading as="h4" fontSize={16} mb={3}>
            Load-Use Hazard Detection
          </Heading>
          <Text mb={4}>
            Forwarding works great, but there's one case where you just have to wait: when you load 
            data from memory and the very next instruction needs it. Memory reads take a full cycle, 
            so there's nothing to forward yet. My hazard detection unit watches for this pattern, if 
            it sees a load instruction followed by an instruction that uses that loaded value, it 
            freezes the pipeline for one cycle. The program counter stops incrementing, the IF/ID 
            register holds its value, and I inject a "bubble" (basically a no-op) into the pipeline 
            by zeroing out the control signals. It's not ideal, but it's the only way to guarantee 
            correctness.
          </Text>
        </Box>

        <Box mt={4}>
          <Heading as="h4" fontSize={16} mb={3}>
            Branch Instructions
          </Heading>
          <Text mb={4}>
            Branches add another layer of complexity. For unconditional branches (B), we always 
            jump. For conditional branches (CBZ, CBNZ), we check if the register is zero or not. 
            The branch decision happens in the EX stage, where we calculate the target address and 
            evaluate the condition. If the branch is taken, the PCSrc signal routes the new address 
            back to the program counter, and we flush the incorrectly fetched instructions. It's 
            not perfect, we still waste a couple cycles on mispredicted branches, but it works.
          </Text>
        </Box>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Instruction Set Implementation
        </Heading>
        <Text mb={4}>
          I implemented the core instruction types that make up most programs. Each type has its 
          own encoding format and requires different control signals to execute properly.
        </Text>
        <Table variant="simple" size="sm" mt={4}>
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>Instructions</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontWeight="bold">R-Type</Td>
              <Td>ADD, SUB, AND, ORR</Td>
              <Td>Operations between two registers, result goes to a third</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">I-Type</Td>
              <Td>ADDI, SUBI, ANDI, ORRI, LSL, LSR</Td>
              <Td>Operations with immediate values, plus logical shifts</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">D-Type</Td>
              <Td>LDUR, STUR</Td>
              <Td>Load and store with base register plus offset addressing</Td>
            </Tr>
            <Tr>
              <Td fontWeight="bold">Branch</Td>
              <Td>B, CBZ, CBNZ</Td>
              <Td>Jump to different addresses, with optional zero/non-zero conditions</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Divider my={6} />

      <Box my={6}>
        <Heading as="h3" fontSize={18} mb={4}>
          Testing and Debugging
        </Heading>
        <Text mb={4}>
          Testing a processor is way different from testing software. You can't just print debug 
          statements, you need to watch signals change over time. I wrote testbenches that loaded 
          programs into instruction memory, then used GHDL to simulate the VHDL code and GTKWave 
          to visualize the waveforms. I could see exactly when each instruction entered each pipeline 
          stage, watch register values change, observe memory accesses, and verify that forwarding 
          was working correctly. When something went wrong, I'd zoom into the waveform at that exact 
          clock cycle and trace backwards to find the bug. It was tedious, but there's something 
          satisfying about seeing your processor execute instructions correctly, cycle by cycle.
        </Text>
      </Box>

      <Box my={6}>
        <Image
          src={img}
          alt="5-Stage Pipeline Diagram and GTKWave Signal Viewer"
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
          Building Complexity from Simplicity
        </Heading>
        <Text mb={4}>
          The biggest realization was that processors aren't magic, they're just a bunch of simple 
          components wired together cleverly. A multiplexer here, an adder there, some registers 
          to hold state, and control logic to orchestrate it all. Individually, each piece is 
          straightforward. But when you connect them in the right way, you get something that can 
          execute billions of instructions per second. Understanding how those pieces fit together, 
          how data flows through the pipeline, and how hazards get resolved, made computers feel 
          less mysterious and more like elegant engineering. Now when I write code, I have a much 
          better intuition for what's actually happening when it runs.
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'