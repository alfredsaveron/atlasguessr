import { fileURLToPath } from "node:url";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const workerCompatBanner = `
globalThis.process ??= {};
globalThis.process.env ??= {};

if (typeof globalThis.MessageChannel === "undefined") {
\tclass MessagePortPolyfill {
\t\tconstructor() {
\t\t\tthis.onmessage = null;
\t\t\tthis._peer = null;
\t\t}
\t\tpostMessage(data) {
\t\t\tconst peer = this._peer;
\t\t\tif (!peer || typeof peer.onmessage !== "function") return;
\t\t\tqueueMicrotask(() => peer.onmessage({ data }));
\t\t}
\t\taddEventListener(type, listener) {
\t\t\tif (type === "message") {
\t\t\t\tthis.onmessage = listener;
\t\t\t}
\t\t}
\t\tremoveEventListener(type, listener) {
\t\t\tif (type === "message" && this.onmessage === listener) {
\t\t\t\tthis.onmessage = null;
\t\t\t}
\t\t}
\t\tstart() {}
\t\tclose() {}
\t}

\tglobalThis.MessageChannel = class MessageChannelPolyfill {
\t\tconstructor() {
\t\t\tconst port1 = new MessagePortPolyfill();
\t\t\tconst port2 = new MessagePortPolyfill();
\t\t\tport1._peer = port2;
\t\t\tport2._peer = port1;
\t\t\tthis.port1 = port1;
\t\t\tthis.port2 = port2;
\t\t}
\t};
}
`;

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		build: {
			rollupOptions: {
				output: {
					banner: workerCompatBanner,
				},
			},
		},
	},
});
