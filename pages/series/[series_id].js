import { Stack, Heading, Box } from "@chakra-ui/layout";
import Head from "next/head";
import SeriesDetailEpisodeList from "../../src/components/Series/SeriesDetailEpisodeList";
import SeriesDetailHeader from "../../src/components/Series/SeriesDetailHeader";
import { MainLayout } from "../../src/layout/MainLayout";
import { readEpisodesBySeries, readSeries } from "../../src/utils/api";

const SeriesDetail = ({ series, episodes }) => {
  return (
    <MainLayout>
      <Head>
        <title>{series.title} | 나소미디어</title>
      </Head>
      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "unset" }}
      >
        <SeriesDetailHeader series={series} />
        <SeriesDetailEpisodeList episodes={episodes} />
      </Stack>
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const { series_id } = context.query;
  const series = await readSeries(series_id);
  const episodes = await readEpisodesBySeries(series_id);
  return {
    props: { series: series, episodes: episodes }, // will be passed to the page component as props
  };
}

export default SeriesDetail;
