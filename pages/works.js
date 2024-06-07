import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import calendars from '../components/logo.png'
import portfo from '../components/logo.png'
import wate from '../public/ewbim.png'
import Layout from '../components/layouts/article'

const Works = () => (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <WorkGridItem 
              id="calendar" 
              title="Calendar Connect" 
              thumbnail={calendars}
              >
                  Calendar Connect is a website built to allow users to enter multiple different Universities add see 
                  a simple and good looking overlap of the universities academic calendars. 
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                  id="portfolio"
                  title="Portfolio Website"
                  thumbnail={portfo}
              >
                  Personal Portfolio Website
              </WorkGridItem>
            </Section>
            <Section>
              <WorkGridItem
                  id="water"
                  title="EWB Water Automation Project"
                  thumbnail={wate}
              >
                  Assisted in the creation of the Malawi Greenhouse Project
              </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Container>
      
    </Layout>
  )
  
  export default Works

  