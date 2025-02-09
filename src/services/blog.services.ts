import { request, gql } from 'graphql-request'
import { BlogsType } from '../interface/blogs.interface';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN as string;

export const BlogsServices = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          title
          image {
            url
          } 
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
        }
      }
    `

    try {
      const data = await request<{ blogs: BlogsType[] }>(graphqlAPI, query, {}, {
        Authorization: `Bearer ${token}`,  // 👈 API token qo'shildi
      });
      return data.blogs;
    } catch (error) {
      console.error("GraphQL Request Error:", error);
      return [];
    }
  }
}
