import Head from "next/head";

export const PWA = () => {
  return (
    <Head>
      <meta name="theme-color" content="purple" />
      <meta name="mobile-web-app-capable" content="yes" />

      <link href="/icons/apple-icon.png" rel="apple-touch-icon" />
      <link
        href="/icons/apple-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        href="/icons/apple-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="/icons/apple-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <meta name="apple-mobile-web-app-title" content="나소미디어" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="" />
      <link href="/manifest.json" rel="manifest" />
    </Head>
  );
};
