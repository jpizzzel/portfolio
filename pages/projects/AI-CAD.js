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
import cadGen from '../../public/CAD_GEN.png'
import Image from 'next/image'

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
    <List ml={4} my={4}>
        <ListItem>
        <Meta>Website</Meta>
        <Link href="https://github.com/jpizzzel/AI-CAD-Project">
            Github Source <ExternalLinkIcon mx="2px" />
        </Link>
        </ListItem>
        <ListItem>
        <Meta>Platform</Meta>
        <span>Web</span>
        </ListItem>
        <ListItem>
        <Meta>Stack</Meta>
        <span>React, Node.js, Python, JavaScript, Zoo.dev ML-lphant API, Three.js</span>
        </ListItem>
    </List>
    <Image 
        src={cadGen}
        alt="CAD Generation Screen"
        width="1000"
        height="1000"
    />
    </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
  