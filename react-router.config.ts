import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // Cloudflare Workers adapter
  buildDirectory: "./build",
  serverBuildFile: "index.js",
} satisfies Config;
