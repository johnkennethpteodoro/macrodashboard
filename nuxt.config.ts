// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt/image"],
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
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
});
