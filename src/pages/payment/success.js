import {
  Container,
  Heading,
  VStack,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import {
  CashStat,
  CashDepositStack,
} from "../../components/Payment/CashDeposit";
import { requestAckPayment } from "../../lib/api/payment";
import { Table, Tbody, Tr, Td, TableCaption } from "@chakra-ui/react";
import { setAction } from "../../slices/cash";
import { useDispatch } from "react-redux";

const CashDepositSuccessPage = ({ cashInfo, cashDepositInfo, ackInfo }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  dispatch(setAction(cashInfo));

  return (
    <MainLayout>
      <Head>
        <title>결제 승인 완료 | 나소미디어</title>
      </Head>
      <Container maxWidth={"2xl"}>
        <VStack alignItems="center" justifyContent="center">
          <Heading textAlign={"center"} wordBreak={"keep-all"}>
            결제가 승인되었습니다.
          </Heading>
          <StackDivider
            alignSelf="center"
            width={{ base: "50vw", md: "calc(100% - 14rem)" }}
            borderColor={"gray.400"}
            borderWidth={"1px"}
            mt={"0.5rem!important"}
            mb={"2rem!important"}
          />
          {ackInfo.method !== "가상계좌" ? (
            <>
              <CashDepositStack>
                <CashStat cash={cashInfo.amount}>캐시 잔고</CashStat>
              </CashDepositStack>
              <CashDepositStack>
                <Table
                  variant="simple"
                  colorScheme="purple"
                  fontSize={"small"}
                  marginBottom={"3"}
                  size={{ base: "sm", md: "md" }}
                >
                  <TableCaption placement={"top"}>결제 정보</TableCaption>
                  <Tbody>
                    <Tr>
                      <Td>주문 키</Td>
                      <Td fontSize={"xx-small"}>{ackInfo.paymentKey}</Td>
                    </Tr>
                    <Tr>
                      <Td>총 주문 금액</Td>
                      <Td>{ackInfo.totalAmount}</Td>
                    </Tr>
                    <Tr>
                      <Td>총 결제 금액</Td>
                      <Td>{ackInfo.balanceAmount}</Td>
                    </Tr>
                    <Tr>
                      <Td>결제 수단</Td>
                      <Td>{ackInfo.method}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </CashDepositStack>
              <CashDepositStack>
                <Heading
                  as={"h4"}
                  fontSize={{ base: "md", md: "xl" }}
                  textAlign={"center"}
                >
                  결제가 완료되었습니다.
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
            </>
          ) : (
            <div>
              결제가 승인되었으나, 허용되지 않은 결제 수단인 가상계좌입니다.
              나소미디어 운영사에게 연락하여 주십시오.
            </div>
          )}
        </VStack>
      </Container>
    </MainLayout>
  );
};

export default CashDepositSuccessPage;

export async function getServerSideProps(context) {
  const { paymentKey, orderId, amount } = context.query;
  const [cash, cashDeposit, ackInfo] = await requestAckPayment(
    paymentKey,
    orderId,
    amount
  );
  return {
    props: {
      cashInfo: cash,
      cashDepositInfo: cashDeposit,
      ackInfo: ackInfo,
    }, // will be passed to the page component as props
  };
}
