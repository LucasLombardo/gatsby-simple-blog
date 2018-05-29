module.exports = {
	siteMetadata: {
		title: 'Gatsby Tutorial',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages/posts`,
				name: `posts`,
			},
		},
		'gatsby-transformer-remark',
	],
}
