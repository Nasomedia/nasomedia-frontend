const example_data =
  "https://img2.xyz.futbol/comics/jdrive03/202103/%EC%88%98%EC%97%BC%EC%9D%84%20%EA%B9%8E%EB%8A%94%EB%8B%A4-%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%97%AC%EA%B3%A0%EC%83%9D%EC%9D%84%20%EC%A4%8D%EB%8A%94%EB%8B%A4/%EC%88%98%EC%97%BC%EC%9D%84%20%EA%B9%8E%EB%8A%94%EB%8B%A4-%20%EA%B7%B8%EB%A6%AC%EA%B3%A0%20%EC%97%AC%EA%B3%A0%EC%83%9D%EC%9D%84%20%EC%A4%8D%EB%8A%94%EB%8B%A4%2027-2%ED%99%94/4cf18a8a-13e6-4fad-8778-587afe83bf74.jpg";

import { Container, Flex, Img } from "@chakra-ui/react";
import React from "react";

const ViewerMain = () => {
  return (
    <Container maxW={"2xl"} padding={0}>
      <Flex flexDirection={"column"}>
        <Img src={example_data} fallbackSrc="/noimage"></Img>
        <Img src={example_data} fallbackSrc="/noimage"></Img>
        <Img src={example_data} fallbackSrc="/noimage"></Img>
      </Flex>
    </Container>
  );
};

export default ViewerMain;
