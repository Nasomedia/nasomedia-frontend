import { Stack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../layout/MainLayout";
import CommingSoon from "../components/CommingSoon";

export default function Notifications() {
  return (
    <MainLayout>
      <Head>
        <title>알림 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>알림</Heading>
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
