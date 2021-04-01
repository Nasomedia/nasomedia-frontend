import { Stack, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";

export default function Ranking() {
  return (
    <MainLayout>
      <Head>
        <title>랭킹</title>
      </Head>
      <Stack>
        <Heading>랭킹</Heading>
      </Stack>
    </MainLayout>
  );
}
