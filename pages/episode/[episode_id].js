import { useRouter } from "next/router";
import Head from "next/head";
import { Viewer } from "../../src/layout/Viewer";
import {
  readEpisode,
  readEpisodeImages,
  readNextEpisode,
  readPrevEpisode,
  readSeries,
} from "../../src/utils/api";
import { PRODUCTION_URL, ICON_URL } from "../../src/constants";

const EpisodeView = ({
  episode,
  images,
  nextEpisode,
  prevEpisode,
  ldJSON,
  series,
}) => {
  return (
    <>
      <Head>
        <title>
          {series.title} - {episode.title}
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJSON) }}
        />
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
  const series = await readSeries(episode.series_id);
  const images = await readEpisodeImages(episode_id);
  const nextEpisode = await readNextEpisode(episode_id);
  const prevEpisode = await readPrevEpisode(episode_id);
  const ldJSON = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${PRODUCTION_URL}/episode/${episode.id}`,
      },
      headline: `${series.title} ${episode.title}`,
      image: [`${episode.thumbnail}`],
      dateCreated: `${episode.create_at}`,
      datePublished: `${episode.create_at}`,
      dateModified: `${episode.update_at}`,
      author: {
        "@type": "Person",
        name: "-",
      },
      publisher: {
        "@type": "Organization",
        name: "나소미디어",
        logo: {
          "@type": "ImageObject",
          url: `${PRODUCTION_URL}/${ICON_URL}`,
        },
      },
      description: `${series.description}`,
      // isAccessibleForFree: "False",
      // hasPart: {
      //   "@type": "WebPageElement",
      //   isAccessibleForFree: "False",
      //   cssSelector: ".paywall",
      // },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: series.title,
          item: `${PRODUCTION_URL}/series/${series.id}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: episode.title,
        },
      ],
    },
  ];
  return {
    props: {
      episode: episode,
      images: images,
      nextEpisode: nextEpisode,
      prevEpisode: prevEpisode,
      ldJSON: ldJSON,
      series: series,
    }, // will be passed to the page component as props
  };
}

export default EpisodeView;
