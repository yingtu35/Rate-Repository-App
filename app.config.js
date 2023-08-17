import "dotenv/config";

export default {
  name: "rate-repository-app",
  slug: "rate-repository-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#0366d6",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    icon: "./assets/icon.png",
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#0366d6",
    },
  },
  web: {
    bundler: "metro",
    favicon: "./assets/favicon.png",
  },
  extra: {
    env: process.env.ENV,
    apolloUri: process.env.APOLLO_URI
  },
};
