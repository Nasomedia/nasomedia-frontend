import { Stack, Heading, Box } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";
import { TabSeriesList } from "../src/components/SeriesList";
import { readSeriesesByUpdate } from "../src/utils/lib/api";

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
        <TabSeriesList updates={tabUpdates}></TabSeriesList>
      </Stack>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const tabUpdates = await readSeriesesByUpdate(0, 12);
  return {
    props: { tabUpdates: tabUpdates }, // will be passed to the page component as props
  };
}

export default index;
