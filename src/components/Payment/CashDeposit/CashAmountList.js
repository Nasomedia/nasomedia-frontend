import React from "react";
import { Box, VStack, Radio, StackDivider, RadioGroup } from "@chakra-ui/react";
import { CashStat } from "./CashStat";
import { readMyCash } from "../../../lib/api/cash";

const CashAmountBox = ({ value }) => {
  return (
    <Box>
      <Radio pl={"10px"} colorScheme="purple" size={"lg"} value={`${value}`}>
        {value.toLocaleString("ko-KR", "currency")}원
      </Radio>
    </Box>
  );
};

export const CashAmountList = ({ balance, setAmount, amount }) => {
  const amountList = [1000, 3000, 5000, 10000, 30000, 50000];
  return (
    <>
      <CashStat cash={balance}>캐시 잔고</CashStat>
      <RadioGroup mt={"6px"} onChange={setAmount} value={amount}>
        <VStack
          paddingY={"24px"}
          divider={
            <StackDivider width={"calc(100% - 24px)"} alignSelf={"center"} />
          }
          spacing={"3.5"}
          alignItems={"start"}
        >
          {amountList.map((amount) => (
            <CashAmountBox value={amount} key={amount}></CashAmountBox>
          ))}
        </VStack>
      </RadioGroup>
    </>
  );
};
