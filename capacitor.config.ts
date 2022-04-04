import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.horrorscope.app",
  appName: "My Horrorscopes",
  webDir: "dist/horrorscope",
  bundledWebRuntime: false,
  server: {
    cleartext: true,
  },
};

export default config;
