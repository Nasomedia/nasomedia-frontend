// import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import theme from "../src/components/theme";
import NProgress from "nprogress";
import { SEO } from "../src/components/SEO";
import { PWA } from "../src/components/PWA";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SEO />
      <PWA />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
