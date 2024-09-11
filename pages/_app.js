import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence mode="wait" initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
            <footer style={{ textAlign: "center", fontSize: "14px", color: "#666", fontFamily: "Arial, sans-serif", paddingBottom: "20px" }}>
                <p>© 2024 Jonah Pflaster. All Rights Reserved.</p>
            </footer>
            
        </ChakraProvider>
    )
}

export default Website