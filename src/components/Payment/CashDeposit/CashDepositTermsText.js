import React from "react";
import { Text } from "@chakra-ui/react";

export const CashDepositTermsText = () => {
  return (
    <>
      <Text>
        - 충전된 캐시는 마지막 이용일로부터 5년 경과 시까지 이용 내역이 없으며
        1년 동안 나소미디어 서비스에 접속하지 않은 경우,{" "}
        {"<상법 제 64조 상사채권 소멸시효>"} 조항에 따라 소멸됩니다.
      </Text>
      <Text>
        - 사용되지 않은 캐시에 대해서는 7일 이내 청약철회가 가능합니다.
      </Text>
      <Text>
        - 일부를 사용한 캐시는 환불받을 수 있으며 잔액 환급 비율(90%)에 해당하는
        금액을 환불해 드립니다.
      </Text>
    </>
  );
};
