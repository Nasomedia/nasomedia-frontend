import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export const CashBalance = ({ cash = 0 }) => {
  return (
    <Stat textAlign={"center"}>
      <StatLabel>캐시잔고</StatLabel>
      <StatNumber>{cash}원</StatNumber>
    </Stat>
  );
};
