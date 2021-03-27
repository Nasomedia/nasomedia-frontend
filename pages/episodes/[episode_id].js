import { useRouter } from "next/router";
import Head from "next/head";
import { ViewerLayout } from "../../src/layout/ViewerLayout";

const EpisodeView = () => {
  const router = useRouter();
  const { episode_id } = router.query;

  return (
    <ViewerLayout>
      <Head>
        <title>{episode_id}</title>
      </Head>
    </ViewerLayout>
  );
};

export default EpisodeView;
