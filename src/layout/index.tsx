import React from 'react';
import { LayoutProps } from './layout.props';
import { JSX } from '@emotion/react/jsx-runtime';
import { Footer, Navbar } from '../components';
import { Box } from '@mui/material'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar/>
      <Box minHeight={'90vh'}>{children}</Box> 
      <Footer/>
    </>
  );
};

export default Layout;