import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash1.png",
    resizeMode: "contain",
    backgroundColor: "#0366d6",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    icon: "./assets/icon1.png",
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon1.png",
      backgroundColor: "#0366d6",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    env: process.env.ENV,
    apolloUri: process.env.APOLLO_URI,
  },
};
