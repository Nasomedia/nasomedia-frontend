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
        <Text>
          consectetur adipiscing elit. Vivamus non dictum nisl. Quisque et
          venenatis nunc, ac tincidunt nibh. Vestibulum commodo posuere
          interdum. Praesent eget semper velit. In id sollicitudin odio. Sed
          cursus auctor leo non fermentum. Vivamus lacinia congue elit, at
          pharetra purus elementum eu. Nunc vel justo sit amet ex aliquam
          blandit ornare ut felis. Maecenas auctor, lacus ac volutpat malesuada,
          nibh ante hendrerit diam, vel sodales nunc turpis in nunc. Vivamus
          dolor sapien, convallis vitae ultricies quis, volutpat ut lacus. Morbi
          suscipit erat ut dui facilisis, vel pretium ante aliquam. Praesent sed
          nunc eu odio posuere condimentum vel sit amet dolor. Nulla ac metus
          nec nibh pulvinar aliquet vitae eu ante. Vivamus pharetra magna quam,
          sit amet tempor massa maximus vitae. Phasellus laoreet erat non
          finibus hendrerit. Integer ligula tellus, sodales eget suscipit
          sagittis, congue eget tortor. In blandit nisi nec sapien eleifend, eu
          pretium nibh efficitur. Proin in ipsum sed risus tristique mattis vel
          et magna. Vestibulum eu augue est. Fusce sem nisi, viverra at mauris
          sit amet, fermentum vehicula leo. Integer accumsan vehicula vehicula.
          In luctus ullamcorper placerat. In hac habitasse platea dictumst.
        </Text>
      </Stack>
    </ViewerLayout>
  );
}
