// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc

const colors = {};

const fonts = {
  heading: "Noto Sans KR",
  body: "Noto Sans KR",
};

const theme = extendTheme({ colors, fonts });

export default theme;
