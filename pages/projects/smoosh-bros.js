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
import Image from 'next/image'
import logo from '../../public/smoosh_bros.jpeg';

const Work = () => (
  <Layout title="Smoosh Bros">
    <Container pt={6}>
      <Title>
        Smoosh Bros - FPGA Fighting Game <Badge>2025</Badge>
      </Title>
      <P>
        A Super Smash Bros-style two-player fighting game built entirely in SystemVerilog on an FPGA.
        This project implements a fully hardware-accelerated fighting game with no CPU, no firmware,
        and no software loop of any kind. Every frame of gameplay is produced directly in FPGA logic,
        including movement, physics, collision detection, hit detection, shields, health tracking,
        sprite animation, and VGA rendering.
      </P>
      <P>
        The game features responsive two-player controls, smooth horizontal movement with acceleration,
        full jumping and falling animations, an attack system with active hit frames, real-time health
        bars, stock-based life system, shield mechanics with decay and cooldown, accurate platform
        collision, and clean animation transitions. The entire game engine runs fully in parallel,
        synchronized to the VGA clock, making the FPGA itself the game engine.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/Daniel-Jarka/Smoosh_Bros">
            Daniel-Jarka/Smoosh_Bros <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>FPGA Hardware</span>
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <span>SystemVerilog</span>
        </ListItem>
        <ListItem>
          <Meta>Resolution</Meta>
          <span>640×480 @ 60Hz VGA</span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <span>Hardware Sprites, Real-Time Physics, Parallel Game Engine</span>
        </ListItem>
        <ListItem>
          <Meta>Controls</Meta>
          <span>NES-style Digital Controllers, Attack/Shields/Jumping</span>
        </ListItem>
        <ListItem>
          <Meta>Contributors</Meta>
          <span>Vaughan, Andrew, Jonah, Daniel</span>
        </ListItem>
      </List>
      <Image
        src={logo}
        alt="Smoosh Bros FPGA Fighting Game"
        width={1000}
        height={600}
        style={{ borderRadius: '8px', marginTop: '20px' }}
      />
      <video
        width="640"
        height="360"
        controls
        style={{ borderRadius: '8px', marginTop: '20px', maxWidth: '100%' }}
      >
        <source src="/smoosh_bros.mp4" type="video/mp4" />
      </video>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
