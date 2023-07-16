import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { appButton } from "./buttons";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brandOrange: "#F14C23",
    brandDarkBlue: "#2B2A35",
    brandBlue: "#1B75BB",
    brandLightBlue: "#ECF4F9",
  },
  fonts: {
    heading: `'Magistral', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: { Button: appButton },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontSize: ["38px", "42px", "45px"],
      fontWeight: "700",
      lineHeight: "125%",
    },
    subheading: {
      fontFamily: "heading",
      fontSize: ["24px", "26px", "28px"],
      fontWeight: "700",
      lineHeight: "135%",
    },
    smheading: {
      fontFamily: "heading",
      fontSize: ["21px", "23px", "25px"],
      fontWeight: "700",
      lineHeight: "135%",
    },
    // for body context
    context: {
      fontSize: ["14px", "16px", "20px"],
      fontWeight: "400",
      lineHeight: "115%",
    },
    // for FAQ context
    smContext: {
      fontSize: ["14px", "16px"],
    },
    // for the context in Divider Section (suitable for lined title and its text)
    smBold: {
      fontSize: ["17px"],
      fontWeight: "600",
      lineHeight: { base: "175%", sm: "135%" },
    },
  },
});

export default theme;
