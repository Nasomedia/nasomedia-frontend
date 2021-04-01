import { ColorModeScript } from "@chakra-ui/color-mode";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/components/theme";

class NasoDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko-KR">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NasoDocument;
