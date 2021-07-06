import React from "react";
import {
  Box,
  VStack,
  Radio,
  StackDivider,
  RadioGroup,
  Heading,
} from "@chakra-ui/react";
import { CashStat } from "./CashStat";

const PaymentMethodBox = ({ value }) => {
  return (
    <Box>
      <Radio pl={"10px"} colorScheme="purple" size={"lg"} value={`${value}`}>
        {value}
      </Radio>
    </Box>
  );
};

export const CashPaymentMethod = ({ setMethod, method, amount }) => {
  const methodList = ["카드", "가상계좌"];
  return (
    <>
      <RadioGroup mt={"6px"} onChange={(e) => setMethod(e)} value={method}>
        <VStack
          paddingY={"24px"}
          divider={
            <StackDivider width={"calc(100% - 24px)"} alignSelf={"center"} />
          }
          spacing={"3.5"}
          alignItems={"start"}
        >
          <Heading textAlign={"center"} fontSize={"2xl"} alignSelf={"center"}>
            결제 수단 선택
          </Heading>
          {methodList.map((methods) => (
            <PaymentMethodBox value={methods} key={methods}></PaymentMethodBox>
          ))}
        </VStack>
      </RadioGroup>
    </>
  );
};
