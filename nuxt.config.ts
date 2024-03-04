// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt/image", "@nuxtjs/supabase"],
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			title: "macrodashboard",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
	typescript: {
		strict: true,
		typeCheck: true,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	supabase: {
		url: process.env.SUPABASE_URL,
		key: process.env.SUPABASE_KEY,
		redirect: false,
	},
});
