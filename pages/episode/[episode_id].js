import { useRouter } from "next/router";
import Head from "next/head";
import { Viewer } from "../../src/layout/Viewer";
import {
  readEpisode,
  readEpisodeImages,
  readNextEpisode,
  readPrevEpisode,
} from "../../src/utils/api";
import { useEffect } from "react";

const EpisodeView = ({ episode, images, nextEpisode, prevEpisode }) => {
  return (
    <>
      <Head>
        <title>{episode.title}</title>
      </Head>
      <Viewer
        episode={episode}
        images={images}
        nextEpisode={nextEpisode}
        prevEpisode={prevEpisode}
      ></Viewer>
    </>
  );
};

export async function getServerSideProps(context) {
  const { episode_id } = context.query;
  const episode = await readEpisode(episode_id);
  const images = await readEpisodeImages(episode_id);
  const nextEpisode = await readNextEpisode(episode_id);
  const prevEpisode = await readPrevEpisode(episode_id);
  return {
    props: {
      episode: episode,
      images: images,
      nextEpisode: nextEpisode,
      prevEpisode: prevEpisode,
    }, // will be passed to the page component as props
  };
}

export default EpisodeView;
