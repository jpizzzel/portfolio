import {
    Container,
    Badge,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
<Layout title="EWB">
    <Container>
    <Title>
        JumboCode Project Currently In Progress<Badge>2024-2025</Badge>
    </Title>
    <P>
        Updates throughout the year will be made here on how the project is going, what parts I am working on/implementing and more!
    </P>
    <List ml={4} my={4}>
        <ListItem>
        <Meta>Stack</Meta>
        <span>Typescript, React, Mongodb, Github, and NextJs</span>
        </ListItem>
        <ListItem>
        <Meta>My Group</Meta>
        <span>Bread and Roses</span>
        </ListItem>
        <ListItem>
        <Meta>Club</Meta>
        <Link href="https://jumbocode.org/" >
            JumboCode <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="https://www.linkedin.com/company/tuftsjumbocode" mx="20px">
            JumboCodeLinkedIn <ExternalLinkIcon mx="2px" />
        </Link>
        </ListItem>
    </List>
    </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'