import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 8, filter: 'blur(4px)' },
  enter: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, x: 0, y: -8, filter: 'blur(4px)' }
}

const Layout = ({ children, title }) => {
  const t = `${title} - Jonah Pflaster`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
