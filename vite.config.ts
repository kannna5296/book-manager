import { defineConfig, ProxyOptions, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const { VITE_API_BASE_PATH } = env;

  const proxy: Record<string, ProxyOptions | string> = {
    //これほんまにいける？
    "/api/v1": {
      target: VITE_API_BASE_PATH,
      changeOrigin: true,
    },
  };
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [vue()],
    server: {
      proxy: proxy,
      host: true,
    },
  };
});
