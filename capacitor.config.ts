import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.horrorscope.app",
  appName: "horrorscope",
  webDir: "dist/horrorscope",
  bundledWebRuntime: false,
  server: {
    hostname: "https://127.0.0.1",
  },
};

export default config;
