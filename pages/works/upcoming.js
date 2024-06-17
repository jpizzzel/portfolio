import {
    Container,
    Badge,
    Link,
    Heading,
    List,
    ListItem,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels
  } from '@chakra-ui/react'
  import Section from '../../components/section'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Work = () => (
    <Layout title="Upcoming">
      <Container>
        <Title>
          My Current Projects/Ideas<Badge>2024</Badge>
        </Title>
        <Section>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Physics Simulator</Tab>
                    <Tab>Interactive RaspberryPi</Tab>
                    <Tab>OpenAI project</Tab>
                    <Tab>Chessbot</Tab>
                    <Tab>AI Simulation</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                      <Meta>Description</Meta>
                      <P>Creating a physics simulator with the python library pygame or potentially C++</P>
                      <Meta>Stack</Meta>
                      <span>Python, pygame, C++</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>Just learning more about circuits and different sensors and motors that I can code to make some sort of interactive design.</P>
                      <Meta>Stack</Meta>
                      <span>RaspberryPi, Python</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>Trying to figure out how AI really works and utilizing OpenAI to make my own AI with selective data.</P>
                      <Meta>Stack</Meta>
                      <span>OpenAI</span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>I love chess and one of the biggest parts of modern chess are the chessbots, the most famous being stockfish. Creating one is not an easy task but it would definetly be a fun challenge.</P>
                      <Meta>Stack</Meta>
                      <span></span>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>I have seen many youtube videos of AI trying to learn videosgames, or having tasks they have to complete. Making something like that of my own sounds like fun!</P>
                      <Meta>Stack</Meta>
                      <span></span>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Section>
        
      </Container>
      
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'