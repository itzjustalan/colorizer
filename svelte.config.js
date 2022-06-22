// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      pages: 'docs',
      assets: 'docs'
    }),

    paths: {
			base: dev ? '' : '/colorizer',
		},

    prerender: {
      concurrency: 10,
      crawl: true,
      default: true,
      enabled: true,
      entries: ['*'],
      onError: 'continue'
    },

    alias: {
      $components: 'src/lib/components',
      $utils: 'src/lib/utils',
      $src: 'src',
    },

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
