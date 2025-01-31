import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// Initialize the Roboto font
export const roboto = Roboto({
  weight: ['400', '500', '700'], // Use 'weight' instead of 'weights'
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create the MUI theme
export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily, // Set the font family
  },
  palette: {
    mode : 'dark',
  },
});

export default theme;