import React from 'react';
import Layout from '../layout';
import { Hero, Sidebar, Content } from '../components';
import { Box } from '@mui/material';
import { BlogsServices } from '../services/blog.services';
import { BlogsType } from '../interface/blogs.interface';

export const metadata = {
  title: 'Zoyidjon Blog App',
  description: 'React App with TypeScript and Webpack',
};

const getBlogs = async (): Promise<BlogsType[]> => {
  const blogs = await BlogsServices.getAllBlogs();
  return blogs;
};

const IndexPage = async () => {
  const blogs = await getBlogs(); // Ma'lumotlarni server tomonida olish
  console.log(blogs);
  

  return (
    <Layout>
      <Hero />
      <Box sx={{ display: 'flex', gap: "20px", flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
        <Sidebar />
        <Content />  {/* blogs ni Content komponentiga berish */}
      </Box>
    </Layout>
  );
};

export default IndexPage;
