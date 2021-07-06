import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export const CashDepositStack = (props) => {
  return (
    <Flex
      flexDir={"column"}
      w={{ base: "90vw", md: "xl" }}
      rounded={"md"}
      marginTop={"4px"}
      paddingY={"10px"}
      paddingX={{ base: "3", md: "6" }}
      boxShadow={"md"}
      bgColor={useColorModeValue(
        "rgba(254, 254, 254, 0.8)",
        "rgba(36, 42, 54, 0.8)"
      )}
      {...props}
    >
      {props.children}
    </Flex>
  );
};
