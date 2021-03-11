import { Container, Stack, Heading, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { MainLayout } from "../src/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>NASOMEDIA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Stack>
          <Heading>The spectacle before us was indeed sublime.</Heading>
          <Text>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside, the sable cloud beneath was dished out, and
            the car seemed to float in the middle of an immense dark sphere,
            whose upper half was strewn with silver. Looking down into the dark
            gulf below, I could see a ruddy light streaming through a rift in
            the clouds.
          </Text>
        </Stack>
      </Container>
    </MainLayout>
  );
}
