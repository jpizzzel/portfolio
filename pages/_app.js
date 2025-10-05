import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import AI_CHAT_AGENT from '../components/ai-chat-agent';

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      <footer
        style={{
          textAlign: 'center',
          fontSize: '14px',
          color: '#666',
          fontFamily: 'Arial, sans-serif',
          paddingBottom: '20px',
        }}
      >
        <p>© 2025 Jonah Pflaster. All Rights Reserved.</p>
      </footer>
      <AI_CHAT_AGENT />
      <Analytics />
    </ChakraProvider>
  );
};

export default Website;
