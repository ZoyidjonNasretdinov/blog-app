import React from 'react'
import Layout from '../layout';
import { Button } from '@mui/material';

export const metadata = {
  title: 'Zoyidjon App',
  description: 'React App with TypeScript and Webpack',
};


const IndexPage = () => {
  return (
    <Layout>
      <Button>Click</Button>
    </Layout>
  )
}

export default IndexPage