import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

export const CashStat = (props) => {
  return (
    <Stat textAlign={"center"} {...props}>
      <StatLabel>{props.children}</StatLabel>
      <StatNumber>{props.cash}원</StatNumber>
    </Stat>
  );
};
