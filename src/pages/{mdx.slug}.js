import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
const Page = ({ data, pageContext }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        
      }
      body
    }
  }
`
export default Page

/*
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        slug
        id
        body
      }
    }
  }
`*/

