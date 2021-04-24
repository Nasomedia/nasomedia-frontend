import { Stack, Heading, Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../src/utils/lib/fetch";
import { UpdateSeriesList } from "../src/components/SeriesList/UpdateSeriesList";
import { BASE_URL } from "../src/constants";
import { MainLayout } from "../src/layout/MainLayout";
import { readSeriesesByUpdate } from "../src/utils/api";

export default function Updates({ initialUpdates }) {
  const { data: updates } = useSWR(
    `${BASE_URL}/series/update?skip=${0}&limit=${100}`,
    fetcher,
    {
      initialData: initialUpdates,
    }
  );
  return (
    <MainLayout>
      <Head>
        <title>업데이트 - 나소미디어</title>
        <link
          rel="preload"
          href={`${BASE_URL}/series/update`}
          as="fetch"
          crossorigin="anonymous"
        />
      </Head>
      <Stack spacing={10}>
        <Heading>업데이트</Heading>
        <Text>실시간으로 업데이트 되는 목록들!</Text>
        <UpdateSeriesList updates={updates}></UpdateSeriesList>
      </Stack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const updates = await readSeriesesByUpdate(0, 100);
  return {
    props: { initialUpdates: updates }, // will be passed to the page component as props
  };
}
