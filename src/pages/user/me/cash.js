import { Stack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../../../layout/MainLayout";
import CommingSoon from "../../../components/CommingSoon";

export default function MyCash() {
  return (
    <MainLayout>
      <Head>
        <title>내 캐시 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>내 캐시</Heading>
        <CommingSoon />
      </Stack>
    </MainLayout>
  );
}

