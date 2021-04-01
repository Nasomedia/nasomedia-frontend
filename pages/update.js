import { Stack, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";

export default function Updates() {
  return (
    <MainLayout>
      <Head>
        <title>업데이트된 목록</title>
      </Head>
      <Stack>
        <Heading>업데이트</Heading>
      </Stack>
    </MainLayout>
  );
}
