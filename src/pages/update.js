import {
  Stack,
  Heading,
  Text,
  IconButton,
  Flex,
  Spacer,
  Button,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import useSWR, { useSWRInfinite } from "swr";
import fetcher from "../lib/fetch";
import { UpdateSeriesList } from "../components/SeriesList/UpdateSeriesList";
import { API_BASE_URL } from "../constants";
import { MainLayout } from "../layout/MainLayout";
import { readSeriesMultiple } from "../lib/api";
import { MdRefresh } from "react-icons/md";
import { useEffect } from "react";

const PAGE_SIZE = 20;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `${API_BASE_URL}/series/?skip=${pageIndex}&limit=${PAGE_SIZE}&sort_by=update_at&order_by=desc`; // SWR key
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
  const toast = useToast();

  useEffect(() => {
    mutate();
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>업데이트 | 나소미디어</title>
      </Head>
      <Stack spacing={6}>
        <Heading>업데이트</Heading>
        <Flex
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text>실시간으로 업데이트 되는 목록들!</Text>
          <Spacer />
          <Button
            isLoading={isRefreshing}
            mt={{ base: "4", md: null }}
            loadingText={"새로고침중..."}
            colorScheme={"purple"}
            variant={"outline"}
            aria-label={"Refresh Updates"}
            leftIcon={<MdRefresh />}
            onClick={async () => {
              toast({
                title: "새로고침 합니다.",
                status: "info",
                duration: 1000,
                isClosable: true,
              });
              await mutate();
              if (!isRefreshing && !error) {
                toast({
                  title: "새로고침 되었습니다.",
                  status: "success",
                  duration: 1000,
                  isClosable: true,
                });
              }
            }}
          >
            새로고침
          </Button>
        </Flex>
        <UpdateSeriesList updates={updates}></UpdateSeriesList>
      </Stack>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const updates = await readSeriesMultiple(0, 100, "update_at", "desc");
  return {
    props: { initialUpdates: updates }, // will be passed to the page component as props
  };
}
