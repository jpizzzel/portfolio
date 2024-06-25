import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const charcoalYellowTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#c7c7c7', '#1c1c1e')(props),
        color: mode('#1c1c1e', '#f5f5f5')(props),
      },
    }),
  },
  components: {
    Heading: {
      variants: {
        'section-title': {
          textDecoration: 'underline',
          fontSize: 24,
          textUnderlineOffset: 6,
          textDecorationColor: '#f1c40f',
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4,
          color: '#f1c40f',
        },
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('#f1c40f', '#f1c40f')(props),
        textUnderlineOffset: 3,
        _hover: {
          textDecoration: 'none',
          color: mode('#d4ac0d', '#d4ac0d')(props),
        },
      }),
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: '#f1c40f',
          _hover: {
            borderColor: '#d4ac0d',
          },
          _focus: {
            borderColor: '#d4ac0d',
            boxShadow: '0 0 0 1px #d4ac0d',
          },
        },
      },
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
  colors: {
    charcoal: '#1c1c1e',
    yellow: '#f1c40f',
    darkYellow: '#d4ac0d',
    lightGray: '#807e7e',
  },
});

export default charcoalYellowTheme;
