import { useRouter } from "next/router";

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
