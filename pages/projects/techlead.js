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
import DAD from '../../public/DADs_loadcell.jpg'
import DAD1 from '../../public/DADs_Poster.jpg'
import Image from 'next/image'
  
  const Work = () => (
    <Layout title="Calendar Connect">
      <Container pt={6}>
        <Title>
          Data Analysis Design Tech Group <Badge>2024 - 2025</Badge>
        </Title>
        <P>
            Leading an Engineering Without Borders tech group, 10-20 
            undergraduate engineers. My groups focus is on creating a water source mapping software, hardware design and data storage/analytics.
            Below you can see our prototype for measuring the water change in the tanks we are implementing in a community in Malawi. 
            We are utilizing load cells, arduinos, strain gauges, amplifiers, our CAD designed plates and storage devices to hold and measure the water tanks. 
            We send this data to our server where we then organize it and utilize it for many different things such as reports sent to the Malawi Government, 
            data sent to citizens of the village, and more.
        </P>
        <P>
          We are currently working on building the first version of our device after further adjusting our design and prototype. We have engineers working on the hardware design, software development, data engineering, CAD design, etc. 
          Overall, this project is on a great track to hopefully have a fully implemented server for our club and the people of Malawi. As well as a fully implemented water reading device for measuring the amount of rain water our tanks are receiving.    
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.tuftsgloballeadership.org/program/ewb">
              Tufts Engineering Without Borders <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Project</Meta>
            <span>Malawi</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Arduino, Load cell, Strain Gauge, CAD</span>
          </ListItem>
        </List>

        <Image 
            src={DAD}
            alt="Loadcell"
            width = "1000"
            height = "1000"
        />
        <Image 
            src={DAD1}
            alt="Poster"
            width = "1000"
            height = "1000"
        />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  