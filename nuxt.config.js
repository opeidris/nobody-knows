import FMMode from 'frontmatter-markdown-loader/mode';
const path = require('path');
const glob = require('glob');
const markdownPaths = [ 'posts' ];
export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || 'Nobody Knows',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || 'Nobody Knows What There Are Doing. Neither Do I'
			}
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/identicon.png' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss'
	],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv'
	],
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {
			config.module.rules.push({
				test: /\.md$/,
				include: path.resolve(__dirname, 'content'),
				loader: 'frontmatter-markdown-loader',
				options: {
					mode: [ FMMode.VUE_COMPONENT ],
					vue: {
						root: 'markdown-body'
					}
				}
			});
		}
	},
	generate: {
		routes: dynamicMarkdownRoutes()
	}
};
function dynamicMarkdownRoutes() {
	return [].concat(
		...markdownPaths.map((mdPath) => {
			return glob
				.sync(`${mdPath}/*.md`, { cwd: 'content' })
				.map((filepath) => `${mdPath}/${path.basename(filepath, '.md')}`);
		})
	);
}
