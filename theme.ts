import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { appButton } from "./buttons";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    sage: "#686A4E",
    ivory: "#CFCDC2",
    tan: "#977557",
    coolGray: "#757573",
  },
  fonts: {
    heading: `'RobotoSlab', sans-serif`,
    headingBold: `'RobotoSlabExtraBold', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: { Button: appButton },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontSize: ["38px", "42px", "65px"],
      lineHeight: "125%",
    },
    headingBold: {
      fontFamily: "headingBold",
      fontSize: ["38px", "42px", "65px"],
      lineHeight: "125%",
    },
    subheading: {
      fontFamily: "heading",
      fontSize: ["24px", "26px", "48px"],
      fontWeight: "700",
      lineHeight: "135%",
    },
    context: {
      fontSize: ["14px", "16px", "20px"],
      fontWeight: "400",
      lineHeight: "115%",
    },
    smContext: {
      fontSize: ["14px", "16px"],
    },
    smBold: {
      fontSize: ["17px"],
      fontWeight: "600",
      lineHeight: "155%",
    },
  },
});

export default theme;
