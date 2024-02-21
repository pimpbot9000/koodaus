import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const Page = ({ data, pageContext }) => {
  console.log({data})
  const hello = "Paska"
  return (
    
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
 
      <div>{data.mdx.body}</div>
    
    </Layout>
  )
}

const Page2 = ({data}) => (
  <p>{data.allMdx.nodes[0].body}</p>
  );
/*     */
/*
export const query = graphql`
  query ($id: String) {
    
      frontmatter {
        title        
      }
      body
    
  }
`*/

/*export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        rawBody
      }
    }
  }`
*/

export default Page

/*

`*/
