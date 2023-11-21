import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csrf: { checkOrigin: process.env.VERCEL_ENV !== "development", },
	}
};

export default config;
