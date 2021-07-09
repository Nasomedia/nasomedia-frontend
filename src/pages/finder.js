import { Stack, Heading, Text, Center, Img } from "@chakra-ui/react";
import Head from "next/head";
import CommingSoon from "../components/CommingSoon";
import { MainLayout } from "../layout/MainLayout";

export default function Finder() {
  return (
    <MainLayout>
      <Head>
        <title>상세검색 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>상세검색</Heading>
        <CommingSoon />
      </Stack>
    </MainLayout>
  );
}