import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material'; // Ijtimoiy tarmoq ikonkalari
import React from 'react';
import { navItems } from '../../config/constants';

const Footer = () => {
 

  return (
    <Box
      padding={'20px'}
      sx={{
        backgroundColor: 'primary.main', // Asosiy rang
        color: 'primary.contrastText',   // Kontrast matn rangi
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
      }}
    >
      {/* Sahifa havolalari */}
      <Stack direction="row" spacing={4} justifyContent="center" mb={2}>
        {navItems.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            color="inherit"
            underline="none"
          >
            {item.label}
          </Link>
        ))}
      </Stack>

      {/* Ijtimoiy tarmoq tugmalari */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          color="inherit"
          aria-label="Facebook"
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          color="inherit"
          aria-label="Twitter"
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          color="inherit"
          aria-label="Instagram"
        >
          <Instagram />
        </IconButton>
      </Stack>

      {/* Mualliflik huquqi */}
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} Zoyidjon Nasretdinov. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;