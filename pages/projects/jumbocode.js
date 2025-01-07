import {
    Container,
    Badge,
    Link,
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
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
<Layout title="EWB">
    <Container>
    <Title>
        JumboCode Project Currently In Progress<Badge>2024-2025</Badge>
    </Title>
    <P>
        Full stack developer for the JumboCode group building a website for the non-profit, Bread and Roses. Updates throughout the year will be made here on how the project is going, what parts I am working on/implementing and more! Down below is some information on the stack, some links to the JumboCode site and some of the tickets I have completed.
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

        <Section>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Statscard</Tab>
                    <Tab>User notifications</Tab>
                    <Tab>Volunteer List</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                      <Meta>Description</Meta>
                      <P>Created a statscard component to display various user information that will be interacted with from the dashboard</P>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>Created various notification components that will appear on a users screen in response to various actions, etc.</P>
                    </TabPanel>
                    <TabPanel>
                    <Meta>Description</Meta>
                      <P>Created a feature which allows admins and volunteers to view and interact with list of volunteers for an event</P>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Section>
    </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'