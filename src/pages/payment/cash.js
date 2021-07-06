import {
  Container,
  Heading,
  VStack,
  StackDivider,
  Button,
  ButtonGroup,
  SlideFade,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import usePayment from "../../hooks/usePayment";
import { CashDepositStepGroup } from "../../components/Payment/CashDeposit";
import { MainLayout } from "../../layout/MainLayout";

const CashDepositPage = () => {
  const {
    set,
    amount,
    setAmount,
    method,
    setMethod,
    orderName,
    setOrderName,
    orderId,
    customerName,
    failUrl,
    successUrl,
    setUrl,
  } = usePayment();
  return (
    <MainLayout>
      <Head>
        <title>캐시 충전하기 | 나소미디어</title>
      </Head>
      <Container maxWidth={"2xl"}>
        <VStack alignItems="center" justifyContent="center">
          <Heading>캐시 충전하기</Heading>
          <StackDivider
            alignSelf="center"
            width={{ base: "50vw", md: "calc(100% - 14rem)" }}
            borderColor={"gray.400"}
            borderWidth={"1px"}
            mt={"0.5rem!important"}
            mb={"2rem!important"}
          />
          <CashDepositStepGroup
            amount={amount}
            setAmount={setAmount}
            method={method}
            setMethod={setMethod}
          ></CashDepositStepGroup>
        </VStack>
      </Container>
    </MainLayout>
  );
};

export default CashDepositPage;
