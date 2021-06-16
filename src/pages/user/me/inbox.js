import { Stack, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../../../layout/MainLayout";
import CommingSoon from "../../../components/CommingSoon";

export default function Me() {
  return (
    <MainLayout>
      <Head>
        <title>내 보관함 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>내 보관함</Heading>
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
