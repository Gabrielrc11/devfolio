import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#3A86FF',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#7C3AED',
      light: '#8B5CF6',
      dark: '#6D28D9',
    },
    background: {
      default: mode === 'light' ? '#F8FAFC' : '#0F172A',
      paper: mode === 'light' ? '#FFFFFF' : '#1E293B',
    },
    text: {
      primary: mode === 'light' ? '#1E293B' : '#F1F5F9',
      secondary: mode === 'light' ? '#475569' : '#94A3B8',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: mode === 'light' 
            ? 'linear-gradient(90deg, #3A86FF 0%, #7C3AED 100%)'
            : 'linear-gradient(90deg, #2563EB 0%, #6D28D9 100%)',
        },
      },
    },
  },
});

export default getTheme; 