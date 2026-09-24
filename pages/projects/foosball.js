import {
  Container,
  Badge,
  List,
  ListItem,
  Button
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { Title, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import dynamic from 'next/dynamic'

// pdf.js needs browser APIs, so skip it during server rendering
const PdfSlides = dynamic(() => import('../../components/pdf-slides'), {
  ssr: false,
  loading: () => <p>Loading slides...</p>,
})

const table = '/static/Foosball.pdf';

const Table = () => {
  return (
    <Layout title="Foosball Table">
      <Container pt={6}>
        <Title>
          Foosball Table <Badge>2024</Badge>
        </Title>
        <P>
          This Foosball table was designed and built entirely from scratch by my team and I. You can read more below.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Tools</Meta>
            <span>OnShape, Sandcasting, 3D printing, Metalworking, Woodworking, etc.</span>
          </ListItem>
        </List>
        <NextLink href={table} passHref legacyBehavior>
          <a download>
            <Button bg="brand.400" color="white" _hover={{ bg: 'brand.500' }} mb={4}>
              Download Slides <ExternalLinkIcon mx="2px" />
            </Button>
          </a>
        </NextLink>
        {/* PDF Viewer */}
        <div style={{ border: '1px solid black', marginTop: '20px' }}>
          <PdfSlides file={table} />
        </div>
      </Container>
    </Layout>
  );
};

export default Table;
