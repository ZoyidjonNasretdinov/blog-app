// ../helpers/theme.js yoki theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Asosiy rang
    },
    secondary: {
      main: '#dc004e', // Ikkinchi rang
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
