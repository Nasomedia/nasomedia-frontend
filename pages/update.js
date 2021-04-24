import {
  Stack,
  Heading,
  Text,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Head from "next/head";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "../src/utils/lib/fetch";
import { UpdateSeriesList } from "../src/components/SeriesList/UpdateSeriesList";
import { BASE_URL } from "../src/constants";
import { MainLayout } from "../src/layout/MainLayout";
import { readSeriesesByUpdate } from "../src/utils/api";
import { IoRefreshCircle } from "react-icons/io5";

const PAGE_SIZE = 20;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `${BASE_URL}/series/update?skip=${pageIndex}&limit=${PAGE_SIZE}`; // SWR key
};

export default function Updates({ initialUpdates }) {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    {
      initialData: initialUpdates,
    }
  );
  const updates = data ? [].concat(...data) : [];
  const isLoadingInitialData = !updates && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && updates && typeof updates[size - 1] === "undefined");
  const isEmpty = updates?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (updates && updates[updates.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && updates && updates.length === size;

  return (
    <MainLayout>
      <Head>
        <title>업데이트 - 나소미디어</title>
      </Head>
      <Stack spacing={6}>
        <Heading>업데이트</Heading>
        <Flex alignItems={"center"}>
          <Text>실시간으로 업데이트 되는 목록들!</Text>
          <Spacer />
          <IconButton
            isLoading={isRefreshing}
            colorScheme={"purple"}
            aria-label={"Refresh Updates"}
            icon={<IoRefreshCircle />}
            onClick={() => mutate()}
          ></IconButton>
        </Flex>
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
