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
      <Container>
        <Title>
          My Current Projects/Ideas<Badge>2024</Badge>
        </Title>
        <P>
        This page is currently in progress, but soon it will display videos, 
        CAD files, sideprojects, etc. that I have working on. Most of these 
        projects are just for fun however they will display my skills, ideas, 
        and inovation. Below is an example of some things I have been working on
        that I either have finished but it isn't anything special to display, I 
        have been working on and am probably stuck/have no time, or I have not
        started yet but hope to one day.
        </P>
        <Section>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Physics Simulator</Tab>
                    <Tab>Arduino Controlled Door Lock</Tab>
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
                      <P>The door to my room at university requires a physical 
                        to lock and unlock which seems pretty normal to most 
                        but compared to my dorm last year which had a key card 
                        lock it is quite annoying. For this reason I decided to
                        create a device that can lock and unlock my door from 
                        me and my roomates phones. I 3D printed a storage 
                        device for an arudino to mount onto my door (near the 
                        lock). And then I hooked up a servo motor which can turn the door lock either way. 
                        Then utilizing an api system can interact with the arduino and thus the servo motor from
                        our phones. This allows us to lock and unlock our door from our phones.</P>
                      <Meta>Stack</Meta>
                      <span>Arduino, Python</span>
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