"use client";

import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import React from 'react';
import { navItems } from '../../config/constants';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Dark mode mavzusi
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#141414', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#b0b0b0' },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        padding={'20px'}
        sx={{
          backgroundColor: 'background.default',
          color: 'text.primary',
          borderTop: '1px solid #e0e0e0',
          textAlign: 'center',
        }}
      >
        <Stack direction="row" spacing={4} justifyContent="center" mb={2}>
          {navItems.map((item) => (
            <Link key={item.route} href={item.route} color="inherit" underline="none">
              {item.label}
            </Link>
          ))}
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <IconButton href="https://facebook.com" target="_blank" color="inherit" aria-label="Facebook">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" color="inherit" aria-label="Twitter">
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" color="inherit" aria-label="Instagram">
            <Instagram />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Zoyidjon Nasretdinov. All rights reserved.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
