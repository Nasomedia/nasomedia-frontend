import Head from "next/head";
import { useRouter } from "next/router";

export const AdSense = () => {
  const router = useRouter();
  const isAds = router.asPath.includes("episodes") ? false : true;
  return isAds ? (
    <Head>
      <script
        data-ad-client="ca-pub-1638178136808231"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </Head>
  ) : null;
};
