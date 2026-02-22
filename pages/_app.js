import { ChakraProvider } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Layout from '../components/layouts/main'
import { mPlusRounded, inter } from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Footer from '../components/footer'

const AI_CHAT_AGENT = dynamic(() => import('../components/ai-chat-agent'), {
  ssr: false,
})

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <div className={`${mPlusRounded.variable} ${inter.variable}`}>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
        <Footer />
        <AI_CHAT_AGENT />
        <Analytics />
      </div>
    </ChakraProvider>
  )
}

export default Website
