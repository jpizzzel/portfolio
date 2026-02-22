import {
    Container,
    Badge,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels
  } from '@chakra-ui/react'
import Section from '../../components/section'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Upcoming">
      <Container pt={6}>
        <Title>
          C++ Projects<Badge>2024</Badge>
        </Title>
        <P>
        This is a description of multiple of my key C++ projects which focus on data structure and algorithms. All source code is available for request from jonah.pflaster@tufts.edu
        </P>
        <Section>
            <Tabs variant='soft-rounded' colorScheme='brand'>
                <TabList>
                    <Tab>Gerp -- Grep Reimplementation</Tab>
                    <Tab>Huffman Encoder/Decoder -- Lossless Compression</Tab>
                    <Tab>Reverse Polish Notation Calculator</Tab>
                    <Tab>Metro Simulator</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                      <Meta>Description</Meta>
                      <P>This program is a re-creation of the linux command grep and features a from-scratch implementation of a hashtable class. Given a root directory the program traverses each subdirectory and all files within. For each file in the tree, each word of each line is indexed into a robust, O(n) time access index which can locate every occurrence of a given word (case sensitive or insensitive) in any file contained by the root or the root's subdirectories. This project taught me the ins and outs of template classes/containers and to be intentional in system design as to prioritize both time and space efficiency.</P>
                      <Meta>Created</Meta>
                      <span>11/23/2024</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>This program is an implementation of Huffman Coding compression which takes a tree of weighted characters to encode ASCII chars into a binary string. This binary string in combination with a serialized version of the Huffman Tree used to encode the characters is compiled into binary. This binary file can also be decoded by deserializing the tree from the binary. Then, this tree can be used as a reference to re-create the original ASCII text. This project taught me all about file I/O and how the encoding and decoding process works at its core.</P>
                      <Meta>Created</Meta>
                      <span>11/7/2024</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>This program is an implementation of Reverse Polish Notation (postfix notation) style calculator which, at its core, uses a basic stack to maintain the order of operations and execute calculations. Taking input from cin, the calculator is capable of executing boolean comparisons, conditional execution, and arithmetic. Also, note that this calculator is technically turing complete. This project features a lot of complex stack-based logic that required a modular and efficient solution to support extensive inputs.

SEE: https://en.wikipedia.org/wiki/Reverse_Polish_notation</P>
                      <Meta>Created</Meta>
                      <span>10/10/2024</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>To create a simulation of the Green Line of the Boston T where the user can add passengers and move the train from station to station with the passengers boarding and departing at their respective stations. This project built my fundamental ability to manage memory with care and security and to keep track of a rather complex system containing individualized data.</P>
                      <Meta>Created</Meta>
                      <span>9/24/24</span>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Section>
      </Container>
      
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'