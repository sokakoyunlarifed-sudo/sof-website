import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#E30613' }, // logodaki kırmızı
    secondary: { main: '#222222' }, // koyu kontrast
    background: { default: '#F7F7F7', paper: '#FFFFFF' },
    text: { primary: '#222222', secondary: '#555555' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#E30613',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#E30613',
          '&:hover': { backgroundColor: '#b5000e' },
        },
      },
    },
  },
});

export default theme;
