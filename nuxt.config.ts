// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "AudioPhile | Home",
			charset: "UTF-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ hid: "theme-color", name: "theme-color", content: "#635fc7" },
				{ hid: "description", name: "description", content: "All in one stop to fulfill your audio needs and get the most out of personal audio." },
				{ hid: "og:description", name: "og:description", content: "All in one stop to fulfill your audio needs and get the most out of personal audio." },
				{ hid: "twitter:description", name: "twitter:description", content: "All in one stop to fulfill your audio needs and get the most out of personal audio." },
				{ hid: "og:title", name: "og:title", content: "Audiophile | Home" },
				{ hid: "twitter:title", name: "twitter:title", content: "Audiophile | Home" },
				{ hid: "og:site_name", name: "og:site_name", content: "Audiophile" },
				{ hid: "og:url", name: "og:url", content: "https://audiophile-chi-indol.vercel.app/" },
				{ hid: "og:type", name: "og:type", content: "website" },
				{ hid: "og:image", name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1696234058/Screenshot_2023-10-02_at_09.06.55_mkc9co.png" },
				{ hid: "twitter:image", name: "twitter:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1696234058/Screenshot_2023-10-02_at_09.06.55_mkc9co.png" },
				{ hid: "twitter:card", name: "twitter:card", content: "summary_large_image" },
			],
		},
	},
	vite: {
		vue: {
			script: {
				defineModel: true,
				propsDestructure: true,
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@import "@/assets/scss/abstract/_mixins.scss";
						@import "@/assets/scss/abstract/_variables.scss";
					`,
				},
			},
		},
	},
	css: ["@/assets/scss/index.scss", "@/assets/scss/fonts.scss"],
	modules: ["@pinia/nuxt"],
	pinia: {
		autoImports: ["defineStore", "storeToRefs"],
	},
	imports: {
		dirs: ["stores"],
	},
});
