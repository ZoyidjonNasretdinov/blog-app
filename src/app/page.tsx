import React from 'react'
import Layout from '../layout';
import { Hero } from '../components';


export const metadata = {
  title: 'Zoyidjon App',
  description: 'React App with TypeScript and Webpack',
};


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default IndexPage