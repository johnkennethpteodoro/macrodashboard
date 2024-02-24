// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},
});
