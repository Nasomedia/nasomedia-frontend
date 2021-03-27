import { Stack, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { ViewerLayout } from "../src/layout/ViewerLayout";

export default function Home() {
  return (
    <ViewerLayout>
      <Head>
        <title>랭킹</title>
      </Head>
      <Stack>
        <Heading>랭킹</Heading>
      </Stack>
    </ViewerLayout>
  );
}
