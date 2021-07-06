import { Stack, Heading, Text, Center, Img } from "@chakra-ui/react";
import Head from "next/head";
import CommingSoon from "../../components/CommingSoon";
import { MainLayout } from "../../layout/MainLayout";

export default function UserDetail() {
  return (
    <MainLayout>
      <Head>
        <title>유저 상세페이지 | 나소미디어</title>
      </Head>
      <Stack>
        <Heading>상세페이지</Heading>
        <CommingSoon />
      </Stack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
