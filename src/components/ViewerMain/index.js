const example_data =
  "https://imges-ext-1.discordapp.net/external/lN6Rx6VmOoo2cTlW3r2UiqHjghKf7uRGH15LucjfrDA/https/blog-imgs-135.fc2.com/n/a/s/nasonasofc123456/1_20210128010214540.jpg?width=493&height=701";

import { Container, Flex, Img } from "@chakra-ui/react";
import NextImage from "next/image";
import React, { useCallback } from "react";

const ViewerMain = () => {
  const handleImgError = useCallback((e) => {
    e.target.src = "/noimage.png";
  }, []);
  return (
    <Container maxW={"2xl"} padding={0}>
      <Flex flexDirection={"column"}>
        <Img src={example_data} onError={handleImgError}></Img>
        <Img src={example_data}></Img>
        <Img src={example_data}></Img>
      </Flex>
    </Container>
  );
};

export default ViewerMain;
