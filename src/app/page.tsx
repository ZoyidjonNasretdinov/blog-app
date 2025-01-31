import React from 'react'
import Layout from '../layout';
import { Hero, Sidebar, Content } from '../components';
import { Box } from '@mui/material';


export const metadata = {
  title: 'Zoyidjon App',
  description: 'React App with TypeScript and Webpack',
};


const IndexPage = () => {
  return (  
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: "20px" , padding: '20px'}}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default IndexPage