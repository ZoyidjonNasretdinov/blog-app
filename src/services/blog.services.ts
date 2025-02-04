import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

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
      const data = await request(graphqlAPI, query) // Fixed the variable name here
      return data.blogs
    } catch (error) {
      console.error('Error fetching blogs:', error)
      return []
    }
  }
}
