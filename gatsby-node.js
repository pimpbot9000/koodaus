const path = require("path")
const pageTemplate = path.resolve(`./src/components/layout.js`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx (sort: {frontmatter: {title: ASC}}) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const pages = result.data.allMdx.nodes

  const pagesMetaData = pages.map( page => { return {
    title: page.frontmatter.title,
    slug: page.frontmatter.slug
  }})

  
  pages.forEach(node => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.frontmatter.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in,

      // our page layout component
      
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        pagesMetaData
      },
    })
  })
}