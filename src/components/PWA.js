import Head from "next/head";

export const PWA = () => {
  return (
    <Head>
      <link href="/manifest.json" rel="manifest" />
      <meta name="theme-color" content="purple" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="나소미디어" />
      <meta name="apple-mobile-web-app-title" content="NASOMEDIA" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-navbutton-color" content="purple" />
      <meta name="msapplication-starturl" content="/" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        type="image/png"
        href="/icons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        type="image/png"
        href="/icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        type="image/png"
        href="/icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        type="image/png"
        href="/icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        type="image/png"
        href="/icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        type="image/png"
        href="/icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        type="image/png"
        href="/icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        type="image/png"
        href="/icons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        type="image/png"
        href="/icons/apple-icon-180x180.png"
      />
      <link
        rel="apple-touch-startup-image"
        type="image/png"
        href="/icons/apple-icon.png"
      />
    </Head>
  );
};
