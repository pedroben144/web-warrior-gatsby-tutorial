const path = require('path')

exports.createPages = async function ({ graphql, actions }) {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/project-details.jsx'),
      context: { slug: node.frontmatter.slug }
    })
  })
  
}