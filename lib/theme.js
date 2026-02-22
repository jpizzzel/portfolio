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
        bg: mode('#fafafa', '#0a0a0a')(props),
        color: mode('#1c1c1e', '#f5f5f5')(props),
      },
    }),
  },
  components: {
    Heading: {
      variants: {
        'section-title': {
          fontSize: 24,
          marginTop: 3,
          marginBottom: 4,
          paddingLeft: 4,
          borderLeft: '4px solid',
          borderColor: '#00B5D8',
          color: mode('#1c1c1e', '#f5f5f5'),
        },
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('#0097B2', '#00B5D8')(props),
        textUnderlineOffset: 3,
        _hover: {
          textDecoration: 'none',
          color: mode('#007A94', '#38D0EB')(props),
        },
      }),
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#00B5D8',
          _hover: {
            borderColor: '#0097B2',
          },
          _focus: {
            borderColor: '#0097B2',
            boxShadow: '0 0 0 1px #0097B2',
          },
        },
      },
    },
  },
  fonts: {
    heading: "var(--font-inter), 'Inter', sans-serif",
    body: "var(--font-inter), 'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#E6FBFF',
      100: '#B3F1FF',
      200: '#80E8FF',
      300: '#38D0EB',
      400: '#00B5D8',
      500: '#0097B2',
      600: '#007A94',
      700: '#005E75',
      800: '#004257',
      900: '#002738',
    },
  },
})

export default theme
