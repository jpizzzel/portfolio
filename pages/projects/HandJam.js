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
import hand from '../../public/handjam.jpg';
import Image from 'next/image'

const Work = () => (
  <Layout title="HandJam">
    <Container pt={6}>
      <Title>
        HandJam <Badge>2025</Badge>
      </Title>
      <P>
        HandJam is an "instrument" that is played by using American Sign Language (ASL) numbers, 0-9, to play corresponding notes. I created this project
        along with a team of 2 others, 
        <Link href="https://www.linkedin.com/in/michael-chou-4433042a7/?trk=people-guest_people_search-card"> Michael Chou </Link>
        and 
        <Link href="https://www.linkedin.com/in/elliot-friesen/"> Elliot Friesen</Link>.
        We used a NUCLEO-L432KC as our embedded system which meant we needed to scale everything to fit on a 
        STM32 system. This included scaling down our ML model to fit on the device, and scaling the real time images to 64 x 64 bytes so that the model could run in real time. Our model
        was trained on a dataset of around 2000 images of ASL numbers, and was able to achieve 90-100% accuracy under the correct conditions. This meant that our camera needed to
        have a clear view of the hand, and solid background. Once the model was trained, we were able to play a corresponding frequency to the number that was being shown to the camera by the users hand.

        All the code for this project can be found on the github link below. 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/mzlchou/HandJam">
            HandJam <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Hardware</Meta>
          <span>NUCLEO-L432KC, 8Ω Speaker with PAM8302 Amplifier, 7-segment display</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Tensorflow, Python, C, Platform IO</span>
        </ListItem>
      </List>
      <Image 
        src={hand}
        alt="Calendar"
        width = "1000"
        height = "1000"
      />
      <span>Play video with sound</span>
      <video width="640" height="360" controls>
        <source src={`/demo.mp4`} type="video/mp4" />
      </video>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
