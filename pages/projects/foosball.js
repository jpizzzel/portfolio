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
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf'; // Correct import for pdfjs
import '@react-pdf-viewer/core/lib/styles/index.css'; // Styles for Viewer
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; // Styles for Default Layout
import { useEffect } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

const table = '/static/Foosball.pdf';

const Table = () => {
  useEffect(() => {
    // Dynamically set the worker URL
    GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
  }, []);

  return (
    <Layout title="EWB">
      <Container>
        <Title>
          Engineering Without Borders (EWB) Greenhouse Automation <Badge>2024</Badge>
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
        <NextLink href="/static/Foosball.pdf" passHref legacyBehavior>
          <a download>
            <Button colorScheme="teal" mb={4}>
              Download Slides <ExternalLinkIcon mx="2px" />
            </Button>
          </a>
        </NextLink>
        {/* PDF Viewer */}
        <div style={{ height: '750px', border: '1px solid black', marginTop: '20px' }}>
          <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
            <Viewer fileUrl={table} />
          </Worker>
        </div>
      </Container>
    </Layout>
  );
};

export default Table;
export { getServerSideProps } from '../../components/chakra';
