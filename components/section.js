import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <StyledDiv
      ref={ref}
      initial={{ y: 20, opacity: 0, rotate: -0.5 }}
      animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : { y: 20, opacity: 0, rotate: -0.5 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
