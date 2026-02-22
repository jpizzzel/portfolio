import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#FBF7F2', '#1A1612')(props),
        color: mode('#2D2319', '#F0E8DE')(props),
      },
      '@keyframes wiggle': {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(3deg)' },
        '75%': { transform: 'rotate(-3deg)' },
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'var(--font-instrument-serif), Georgia, serif',
      },
      variants: {
        'section-title': (props) => ({
          fontSize: 24,
          marginTop: 3,
          marginBottom: 4,
          paddingLeft: 4,
          borderLeft: '4px solid',
          borderColor: '#D4735E',
          color: mode('#2D2319', '#F0E8DE')(props),
        }),
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('#2B7A8C', '#3D9DB0')(props),
        textUnderlineOffset: 3,
        _hover: {
          textDecoration: 'none',
          textDecorationStyle: 'wavy',
          color: mode('#1D5B6A', '#9DCED9')(props),
        },
      }),
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#D4C4B0',
          _hover: {
            borderColor: '#2B7A8C',
          },
          _focus: {
            borderColor: '#2B7A8C',
            boxShadow: '0 0 0 1px #2B7A8C',
          },
        },
      },
    },
  },
  fonts: {
    heading: "var(--font-instrument-serif), Georgia, serif",
    body: "var(--font-dm-sans), sans-serif",
    accent: "var(--font-caveat), cursive",
  },
  colors: {
    brand: {
      50: '#E8F4F7',
      100: '#C4E2E9',
      200: '#9DCED9',
      300: '#3D9DB0',
      400: '#2B7A8C',
      500: '#1D5B6A',
      600: '#164955',
      700: '#103740',
      800: '#0A252B',
      900: '#051316',
    },
    sunset: {
      50: '#FEF0EC',
      100: '#FBD5CC',
      200: '#F5B3A3',
      300: '#E08C79',
      400: '#D4735E',
      500: '#B85A47',
      600: '#9A4637',
      700: '#7B3429',
      800: '#5D241C',
      900: '#3E160F',
    },
    gold: {
      50: '#FBF5E8',
      100: '#F3E3C2',
      200: '#EACD96',
      300: '#DFB56A',
      400: '#D4A857',
      500: '#B8903D',
      600: '#9A7730',
      700: '#7B5F24',
      800: '#5D4719',
      900: '#3E2F0F',
    },
    pine: {
      50: '#EBF2EE',
      100: '#CDDDD4',
      200: '#A8C5B4',
      300: '#7AAA91',
      400: '#4A6B5A',
      500: '#3A5647',
      600: '#2D4338',
      700: '#213129',
      800: '#16201C',
      900: '#0B100E',
    },
    sand: {
      50: '#FBF7F2',
      100: '#F5EDE2',
      200: '#E8DCD0',
      300: '#D4C4B0',
      400: '#B8A890',
      500: '#8B7D6B',
      600: '#706454',
      700: '#564B3F',
      800: '#3D352C',
      900: '#241F1A',
    },
  },
})

export default theme
