import { Stack, Heading, Box } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";
import { TabSeriesList } from "../src/components/SeriesList";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>NASOMEDIA</title>
      </Head>
      <Stack spacing={10}>
        <Box>
          <Heading>홈</Heading>
        </Box>
        <TabSeriesList></TabSeriesList>
      </Stack>
    </MainLayout>
  );
}
