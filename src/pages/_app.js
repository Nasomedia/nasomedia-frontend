// import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import App from "next/app";
import Router from "next/router";
import theme from "../components/theme";
import NProgress from "nprogress";
import { SEO } from "../components/SEO";
import { PWA } from "../components/PWA";
// import { AdSense } from "../components/AdSense";
import { useEffect } from "react";
import cookies from "next-cookies";
import { setToken } from "../lib/setToken";
import useUser from "../hooks/useUser";
import { read_user_me } from "../lib/api";
import { wrapper } from "../store";
import { loginAction } from "../slices/user";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-6VRL2HP7FK", {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      });
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <SEO />
      <PWA />
      {/* <AdSense /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6VRL2HP7FK"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { ctx } = appContext; // next에서 넣어주는 context
  const state = ctx.store.getState(); // state 불러오기
  const cookie = ctx.isServer ? ctx.req.headers.cookie : "";

  let pageProps = {};
  const allCookies = cookies(ctx);
  const tokenByCookie = allCookies["token"];
  if (tokenByCookie !== undefined && tokenByCookie !== "") {
    setToken(tokenByCookie);
    const user = await read_user_me();
    if (!state.user.isLoggedIn) {
      ctx.store.dispatch(loginAction(user));
    }
  }
  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
