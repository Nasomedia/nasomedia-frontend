// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

const colors = {};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const fonts = {
  heading: "Noto Sans KR",
  body: "Noto Sans KR",
};

const styles = {
  global: {
    "html, #__next": {
      height: "100%",
    },
    "#__next": {
      display: "flex",
      flexDirection: "column",
    },
    ".body": {
      // todo check how to do this without breaking the site
      // height: '100%', // Push footer to bottom
      overflowY: "scroll", // Always show scrollbar to avoid flickering
    },
    html: {
      scrollBehavior: "smooth",
    },
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      background: "purple.400",
      position: "fixed",
      zIndex: "99999",
      top: 0,
      left: 0,
      width: "100%",
      height: "3px",
    },
  },
};

const theme = extendTheme({ colors, fonts, config, styles });

export default theme;
