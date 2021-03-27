const example_data =
  "https://imges-ext-1.discordapp.net/external/lN6Rx6VmOoo2cTlW3r2UiqHjghKf7uRGH15LucjfrDA/https/blog-imgs-135.fc2.com/n/a/s/nasonasofc123456/1_20210128010214540.jpg?width=493&height=701";

import { Container, Flex, Image } from "@chakra-ui/react";
import React, { useCallback } from "react";

const ViewerMain = () => {
  return (
    <Container maxW={"2xl"} padding={0}>
      <Flex flexDirection={"column"}>
        <Image src={example_data} fallbackSrc="/noimage.png"></Image>
        <Image src={example_data} fallbackSrc="/noimage.png"></Image>
        <Image src={example_data} fallbackSrc="/noimage.png"></Image>
      </Flex>
    </Container>
  );
};

export default ViewerMain;
