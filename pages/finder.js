import { Stack, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";

export default function Finder() {
  return (
    <MainLayout>
      <Head>
        <title>상세검색 - 나소미디어</title>
      </Head>
      <Stack>
        <Heading>상세검색</Heading>
      </Stack>
    </MainLayout>
  );
}
