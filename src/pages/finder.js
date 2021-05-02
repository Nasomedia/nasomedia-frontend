import { Stack, Heading, Text, Center, Img } from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../layout/MainLayout";

export default function Finder() {
  return (
    <MainLayout>
      <Head>
        <title>상세검색 - 나소미디어</title>
      </Head>
      <Stack>
        <Heading>상세검색</Heading>
        <Center mt={"10"} flexDirection={"column"}>
          <Img mt={4} src={"/error_black.png"} />
          <Text mt={8}>아직 준비중입니다.</Text>
        </Center>
      </Stack>
    </MainLayout>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
