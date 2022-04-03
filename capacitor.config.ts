import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.horrorscope.app",
  appName: "horrorscope",
  webDir: "dist/horrorscope",
  bundledWebRuntime: false,
  server: {
    allowNavigation: ["*"],
  },
};

export default config;
