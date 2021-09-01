import { Stack, Heading, Box } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../layout/MainLayout";
import { TabSeriesList } from "../components/SeriesList";
import { readSeriesMultiple } from "../lib/api";
// import { MainCarousel } from "../components/MainCarousel";

const index = ({ tabUpdates }) => {
  return (
    <MainLayout>
      <Head>
        <title>나소미디어</title>
      </Head>
      <Stack spacing={10}>
        <Box>
          <Heading>홈</Heading>
        </Box>
        {/* <MainCarousel /> */}
        <TabSeriesList updates={tabUpdates}></TabSeriesList>
      </Stack>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const tabUpdates = await readSeriesMultiple(0, 12, "update_at", "desc");
  return {
    props: { tabUpdates: tabUpdates }, // will be passed to the page component as props
  };
}

export default index;
