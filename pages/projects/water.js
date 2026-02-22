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
import waterAuto from '../../public/waterauto.jpg';
import grh1 from '../../public/greenhouse1.png';
import grh2 from '../../public/greenhouse2.png';
import Image from 'next/image'

const Work = () => (
<Layout title="EWB">
    <Container pt={6}>
    <Title>
        Engineering Without Borders (EWB) Greenhouse Automation<Badge>2024</Badge>
    </Title>
    <P>
        Engineering Without Borders (EWB) is a club I am part of at Tufts University in which we design and 
        implement sustainable engineering projects in developing communities. A recent project that I was part
        of the entinerity of my freshman year was constructing a Malawian Mobile Greenhouse, which serves 
        to teach sustainability, international culture, engineering skills, environmental awareness, and more.
    </P>
    <List ml={4} my={4}>
        <ListItem>
        <Meta>Tools</Meta>
        <span>Arduino, Raspberry Pi, Stepper Motors, Python, C++, Github, CAD, etc.</span>
        </ListItem>
        <ListItem>
        <Meta>My Group</Meta>
        <span>Water Automation Group</span>
        </ListItem>
        <ListItem>
        <Meta>Club</Meta>
        <Link href="https://sites.tufts.edu/ewb/greenhouse-project/">
            Engineering Without Borders <ExternalLinkIcon mx="2px" />
        </Link>
        </ListItem>
    </List>
    <Image 
        src={waterAuto}
        alt="Water"
        width = "1000"
        height = "1000"
    />
    <Image 
        src={grh1}
        alt="Greenhouse"
        width = "1000"
        height = "1000"
    />
    <Image 
        src={grh2}
        alt="Greenhouse"
        width = "1000"
        height = "1000"
    />
    </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'