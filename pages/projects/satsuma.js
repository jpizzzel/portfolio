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

const Work = () => (
  <Layout title="Satsuma">
    <Container pt={6}>
      <Title>
        Satsuma <Badge>2026</Badge>
      </Title>
      <P>
        Satsuma is a file converter that lives under your cursor on Windows.
        Drag a file, hold a key, and a little wheel pops up. Drop the file on
        a slice and the result shows up next to the original.
      </P>
      <P>
        Shift converts it to another format (images, video, audio, PDFs and
        subtitles), Ctrl opens tools like compress, resize, merge and zip, and
        Alt opens actions like copy path, share and a floating shelf.
        Everything runs on your PC, so nothing gets uploaded anywhere.
      </P>
      <P>
        I loved Tangerine on the Mac and wanted the same thing on Windows, so
        I rebuilt the idea from scratch. Satsuma isn&apos;t affiliated with
        Tangerine or LEAP STUDIO.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://satsumaforwindows.vercel.app/" isExternal>
            satsumaforwindows.vercel.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 10 and 11</span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Open source soon</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C#, .NET 10, WPF</span>
        </ListItem>
        <ListItem>
          <Meta>Built with</Meta>
          <span>Magick.NET, FFmpeg, PDFsharp, SharpCompress</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
