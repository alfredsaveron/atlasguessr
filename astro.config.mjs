import { fileURLToPath } from "node:url";
import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";


export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	integrations: [preact()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat', // Must be below test-utils
				'react/jsx-runtime': 'preact/jsx-runtime'
			},
		},
	},
});
