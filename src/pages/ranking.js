import { Stack, Heading, Text, Center, Img } from "@chakra-ui/react";
import Head from "next/head";
import CommingSoon from "../components/CommingSoon";
import { MainLayout } from "../layout/MainLayout";

export default function Ranking() {
  return (
    <MainLayout>
      <Head>
        <title>랭킹 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>랭킹</Heading>
        <CommingSoon />
      </Stack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}