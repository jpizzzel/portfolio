import { Box, useColorModeValue } from '@chakra-ui/react'

const MountainDivider = ({ my = 8, opacity = 0.3, ...props }) => {
  const color = useColorModeValue('#D4C4B0', '#564B3F')

  return (
    <Box my={my} w="100%" overflow="hidden" {...props}>
      <svg
        viewBox="0 0 1200 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '30px', display: 'block' }}
      >
        <path
          d="M0 25 L60 18 L120 22 L200 10 L280 20 L340 14 L400 8 L460 16 L520 12 L600 5 L680 14 L740 10 L800 18 L860 8 L920 15 L980 12 L1040 20 L1100 14 L1160 22 L1200 18 L1200 30 L0 30 Z"
          fill={color}
          opacity={opacity}
        />
        <path
          d="M0 25 L60 18 L120 22 L200 10 L280 20 L340 14 L400 8 L460 16 L520 12 L600 5 L680 14 L740 10 L800 18 L860 8 L920 15 L980 12 L1040 20 L1100 14 L1160 22 L1200 18"
          stroke={color}
          strokeWidth="1.5"
          opacity={opacity + 0.2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  )
}

const WaveDivider = ({ my = 6, opacity = 0.3, ...props }) => {
  const color = useColorModeValue('#D4C4B0', '#564B3F')

  return (
    <Box my={my} w="100%" overflow="hidden" {...props}>
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '24px', display: 'block' }}
      >
        <path
          d="M0 12 C100 4, 200 20, 300 12 S500 4, 600 12 S800 20, 900 12 S1100 4, 1200 12"
          stroke={color}
          strokeWidth="1.5"
          opacity={opacity + 0.2}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 16 C100 8, 200 24, 300 16 S500 8, 600 16 S800 24, 900 16 S1100 8, 1200 16"
          stroke={color}
          strokeWidth="1"
          opacity={opacity}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  )
}

export { MountainDivider, WaveDivider }
