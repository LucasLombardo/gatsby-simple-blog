import React from 'react'
import Helmet from 'react-helmet'

//react component
export default function Template({ data }) {
	const { markdownRemark: post } = data //different style of doing 'const post = data.markdownRemark'
	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	)
}

//graphQL query
//looks for given blogbost, getting path, and then finding markdown file using markdownRemark
export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`
