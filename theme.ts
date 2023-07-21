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
    headingBold: `'RobotoSlabExtraBold', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: { Button: appButton },
  textStyles: {
    headingBold: {
      fontFamily: "headingBold",
      fontSize: ["38px", "42px", "105px"],
      lineHeight: "125%",
    },
    subheadingBold: {
      fontFamily: "headingBold",
      fontSize: ["24px", "26px", "85px"],
      lineHeight: "135%",
    },
    smallHeadingBold: {
      fontFamily: "headingBold",
      fontSize: ["18px", "20px", "32px"],
      lineHeight: "135%",
    },
    extraSmallHeadingBold: {
      fontFamily: "headingBold",
      fontSize: ["16px", "16px", "22px"],
      lineHeight: "135%",
    },
    context: {
      fontFamily: "Montserrat",
      fontSize: ["18px", "16px", "22px"],
      lineHeight: "125%",
    },
    contextBold: {
      fontFamily: "headingBold",
      fontSize: ["18px", "16px", "32px"],
      lineHeight: "125%",
    },
    smContext: {
      fontFamily: "Montserrat",
      fontSize: ["16px", "16px"],
    },
    smBold: {
      fontFamily: "Montserrat",
      fontSize: ["12px", "18px"],
      fontWeight: "600",
      lineHeight: "125%",
    },
  },
});

export default theme;
