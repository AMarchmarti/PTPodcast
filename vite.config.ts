/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx"],
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["test/vitest.setup.tsx"],
		include: ["**/?(*.)test.ts?(x)"],
	},
});
