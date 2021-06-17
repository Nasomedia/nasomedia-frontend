import React from "react";
import {
  Stack,
  Box,
  Flex,
  VStack,
  Radio,
  StackDivider,
  RadioGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { CashBalance } from "./CashBalance";

const CashItemBox = ({ value }) => {
  return (
    <Box>
      <Radio pl={"10px"} colorScheme="purple" size={"lg"} value={`${value}`}>
        {value.toLocaleString("ko-KR", "currency")}원
      </Radio>
    </Box>
  );
};

const CashItemStack = ({ value, setValue }) => {
  const amountList = [1000, 3000, 5000, 10000, 30000, 50000];
  return (
    <Flex
      flexDir={"column"}
      w={{ base: "90vw", md: "xl" }}
      rounded={"md"}
      marginTop={"4px"}
      paddingY={"10px"}
      paddingX={{ base: "3", md: "6" }}
      boxShadow={"lg"}
      bgColor={useColorModeValue(
        "rgba(254, 254, 254, 0.8)",
        "rgba(36, 42, 54, 0.8)"
      )}
    >
      <CashBalance />
      <RadioGroup mt={"6px"} onChange={setValue} value={value}>
        <VStack
          paddingY={"24px"}
          divider={
            <StackDivider width={"calc(100% - 24px)"} alignSelf={"center"} />
          }
          spacing={'3.5'}
          alignItems={"start"}
        >
          {amountList.map((amount) => (
            <CashItemBox value={amount} key={amount}></CashItemBox>
          ))}
        </VStack>
      </RadioGroup>
    </Flex>
  );
};

export default CashItemStack;
