import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import calendars from '../public/searchSS.png'
import portfo from '../components/logo.png'
import wate from '../public/ewbim.png'
import jcode from '../public/JumboCode.png'
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
                  CalendarConnect is a website designed to help students, parents, professors, etc. 
                  see the overlap between universities academic calendars
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

            <Section>
              <WorkGridItem
                  id="techlead"
                  title="EWB Tech Group Lead"
                  thumbnail={wate}
              >
                  Leading an Engineering Without Borders tech group, 10-20 
                  undergraduate engineers, in developing a Mapping Software for 
                  a community in Malawi and data analysis/storage for the club
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                  id="jumbocode"
                  title="JumboCode Project"
                  thumbnail={jcode}
              >
                  Bread and Roses Project in progress
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                  id="upcoming"
                  title="Ideas/In-progress"
                  thumbnail={portfo}
              >
                  Project I am Currently Working On
              </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Container>
      
    </Layout>
  )
  
  export default Works

  