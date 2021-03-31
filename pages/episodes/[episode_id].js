import { useRouter } from "next/router";
import Head from "next/head";
import { Viewer } from "../../src/layout/Viewer";
import { readEpisode, readEpisodeImages } from "../../src/utils/api";
import { useEffect } from "react";

const EpisodeView = ({ episode, images }) => {
  useEffect(() => {
    console.log(episode);
    console.log(images);
  });
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Viewer episode={episode} images={images}></Viewer>
    </>
  );
};

export async function getServerSideProps(context) {
  const { episode_id } = context.query;
  const episode = await readEpisode(episode_id);
  const images = await readEpisodeImages(episode_id);
  return {
    props: { episode: episode, images: images }, // will be passed to the page component as props
  };
}

export default EpisodeView;
