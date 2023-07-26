import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    dark: "#333",
    white: "#fff",
    textBarTab: "#fff",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 48,
    subtitle: 32,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
