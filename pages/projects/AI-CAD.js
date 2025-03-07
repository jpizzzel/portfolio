import {
Container,
Badge,
Link,
List,
ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
// import demoVid from '../assets/zoo_dev_demoVid.mp4';

const Work = () => (
<Layout title="AI CAD Project Builder">
    <Container>
    <Title>
        AI CAD Project Builder <Badge>2025</Badge>
    </Title>
    <P>
        AI CAD Project Builder is a full-stack application that leverages AI to
        generate CAD models from descriptive text prompts. Users can download 
        generated <code>.step</code> and <code>.gltf</code> files, and view 
        interactive 3D renderings directly in the browser. The user can also chat
        with an AI Assistant who will help the user solve any bugs with the project,
        find ways to overcome challenges, give ideas on how to better
        prompt the AI-CAD generater, etc. 
    </P>
    <P>
        Currently the open source version is available through the github link below.
        There is also a short 2 minute demo video of how the current version
        works. If you would like to see a more indepth live demo or have any 
        troubles with the github feel free to contact me via the contact page.
    </P>
    <List ml={4} my={4}>
        <ListItem>
        <Meta>Source</Meta>
        <Link href="https://github.com/jpizzzel/AI-CAD-Project">
            Github Source <ExternalLinkIcon mx="2px" />
        </Link>
        </ListItem>
        <ListItem>
        <Meta>Platform</Meta>
        <span>Web App</span>
        </ListItem>
        <ListItem>
        <Meta>Stack</Meta>
        <span>React, Node.js, Python, JavaScript, Zoo.dev ML-lphant API, Three.js</span>
        </ListItem>
    </List>
    <List ml={4} my={4}>
        <ListItem>
            <Meta>DEMO VIDEO</Meta>
        </ListItem>
        <ListItem>
            <Meta>Time Stamps:</Meta>
        </ListItem>
        <ListItem>
            <span>0-0:56   Chatting with AI-Chat bot</span>
        </ListItem>
        <ListItem>
            <span>1:22   First CAD model generated</span>
        </ListItem>
        <ListItem>
            <span>2:07   Second CAD model generated</span>
        </ListItem>
    </List>
        <video width="640" height="360" controls>
            <source src={`/zoo_dev_demoVid.mp4`} type="video/mp4" />
        </video>
    </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
  