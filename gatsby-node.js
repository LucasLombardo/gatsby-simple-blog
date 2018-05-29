/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

//boundActionCreators allows you to use gatsbys actions.
exports.createPages = ({ boundActionCreators, graphql }) => {
	//we are accessing the create pages from the API
	const { createPage } = boundActionCreators
	//bring in our template
	const postTemplate = path.resolve('src/templates/post.js')
	//query for all of the blog posts
	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						html
						id
						frontmatter {
							path
							title
						}
					}
				}
			}
		}
	`).then(res => {
		//check for errors
		if (res.errors) {
			return Promise.reject(res.errors)
		}
		//if no errors, loop through posts and register them as pages
		//edges are essentially nodes, so .edges returns an array of our data
		res.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				//pass in the path and the post template componenet
				path: node.frontmatter.path,
				component: postTemplate,
			})
		})
	})
}
