import React from "react";
import { Center, Img, Text } from "@chakra-ui/react";

const CommingSoon = () => {
  return (
    <Center flexDirection={"column"}>
      <Img mt={4} src={"/error_black.png"} />
      <Text mt={8}>아직 준비중입니다.</Text>
    </Center>
  );
};

export default CommingSoon;
