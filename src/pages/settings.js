import { Stack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../layout/MainLayout";
import CommingSoon from "../components/CommingSoon";

export default function Settings() {
  return (
    <MainLayout>
      <Head>
        <title>내 설정 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>설정</Heading>
        <CommingSoon />
      </Stack>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
