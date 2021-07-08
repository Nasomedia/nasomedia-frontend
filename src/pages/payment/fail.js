import {
  Container,
  Heading,
  VStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../layout/MainLayout";
import { readMyCash } from "../../lib/api/cash";
import { CashDepositStack } from "../../components/Payment/CashDeposit";

const CashDepositPage = ({ code, message }) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Head>
        <title>결제 실패 | 나소미디어</title>
      </Head>
      <Container maxWidth={"2xl"}>
        <VStack alignItems="center" justifyContent="center">
          <Heading textAlign={"center"} wordBreak={"keep-all"}>
            결제가 실패하였습니다.
          </Heading>
          <StackDivider
            alignSelf="center"
            width={{ base: "50vw", md: "calc(100% - 14rem)" }}
            borderColor={"gray.400"}
            borderWidth={"1px"}
            mt={"0.5rem!important"}
            mb={"2rem!important"}
          />
          <CashDepositStack>
            <Heading
              as={"h4"}
              fontSize={{ base: "md", md: "xl" }}
              textAlign={"center"}
            >
              오류 메시지 : {message}
            </Heading>
            <Button
              onClick={() => {
                router.push("/");
              }}
              colorScheme="purple"
              fontWeight={"medium"}
              fontSize={{ base: "sm", md: "md" }}
              marginTop={"4"}
              alignSelf={"center"}
              minW={"25%"}
            >
              홈으로 가기
            </Button>
          </CashDepositStack>
        </VStack>
      </Container>
    </MainLayout>
  );
};

export default CashDepositPage;

export async function getServerSideProps(context) {
  const { code, message } = context.query;
  if (typeof code === "undefined") {
    return { props: { code: null, message: null } };
  }
  if (typeof message === "undefined") {
    return { props: { code: null, message: null } };
  }
  return {
    props: {
      code,
      message,
    }, // will be passed to the page component as props
  };
}
