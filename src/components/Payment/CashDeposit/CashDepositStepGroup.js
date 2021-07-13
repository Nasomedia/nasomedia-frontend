import {
  Button,
  ButtonGroup,
  SlideFade,
  Portal,
  Container,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CashAmountList } from "./CashAmountList";
import { CashDepositStack } from "./CashDepositStack";
import { CashDepositTermsText } from "./CashDepositTermsText";
import usePayment from "../../../hooks/usePayment";
import { CashPaymentMethod } from "./CashPaymentMethod";
import { CashStat } from "./CashStat";
import { requestPayment } from "../../../lib/toss";
import { createPaymentOrder } from "../../../lib/api/payment";
import { useToast } from "@chakra-ui/react";

export const CashDepositStepGroup = ({ cashInfo }) => {
  const {
    amount,
    setAmount,
    method,
    setMethod,
    orderName,
    setOrderName,
    orderId,
  } = usePayment();
  const [step, setStep] = React.useState(0);
  const termsRef = React.useRef();
  const [isTermsChecked, setIsTermsChecked] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const toast = useToast();

  return (
    <>
      {step === 0 && (
        <>
          <SlideFade
            in={step === 0}
            // unmountOnExit={true}
            offsetY="20px"
          >
            <CashDepositStack>
              <CashAmountList
                balance={cashInfo.amount}
                amount={amount}
                setAmount={setAmount}
              ></CashAmountList>
            </CashDepositStack>
          </SlideFade>
        </>
      )}
      {step === 1 && (
        <>
          <SlideFade in={step === 1} unmountOnExit={true} offsetY="20px">
            <CashDepositStack>
              <CashStat alignSelf={"center"} cash={amount}>
                결제 금액
              </CashStat>
            </CashDepositStack>
            <CashDepositStack>
              <CashPaymentMethod
                method={method}
                setMethod={setMethod}
                amount={amount}
              />
            </CashDepositStack>
            <CashDepositStack marginTop={"4"}>
              <Checkbox
                onChange={() => {
                  setIsTermsChecked(!isTermsChecked);
                }}
                isChecked={isTermsChecked}
                colorScheme={"purple"}
                fontWeight={"medium"}
              >
                상품, 가격, 할인 정보, 유의 사항 등을 확인하였으며 구매에
                동의합니다.
              </Checkbox>
            </CashDepositStack>
          </SlideFade>
          <Portal containerRef={termsRef}>
            <CashDepositTermsText />
          </Portal>
        </>
      )}

      <ButtonGroup
        sx={{ marginTop: "2rem!important" }}
        variant="outline"
        spacing="12"
      >
        {step > 0 && (
          <Button colorScheme="gray" onClick={() => setStep(0)}>
            이전
          </Button>
        )}
        <Button
          colorScheme="purple"
          isLoading={isLoading}
          isDisabled={isLoading}
          loadingText={"요청중"}
          disabled={
            (step === 0 && amount === 0) ||
            (step === 1 && (method === "" || !isTermsChecked))
              ? true
              : false
          }
          variant={
            (step === 0 && amount !== 0) ||
            (step === 1 && method !== "" && isTermsChecked)
              ? "solid"
              : "outline"
          }
          onClick={async () => {
            if (step !== 1) {
              setStep(1);
            }
            if (step === 1 && amount !== 0 && method !== "" && isTermsChecked) {
              try {
                setIsLoading(true);
                setOrderName(`캐시 충전 ${amount}원`);
                const order = await createPaymentOrder(amount, cashInfo.id);
                await requestPayment(
                  method,
                  amount,
                  order.id,
                  `나소미디어 캐시 충전 ${amount}원`
                );
                setIsLoading(false);
              } catch (e) {
                if (e.message === "취소되었습니다") {
                  toast({
                    title: e.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: "알 수 없는 이유로 결제가 진행되지 못했습니다.",
                    description: "지속된다면 문의하여 주십시오",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }
            }
          }}
        >
          {step === 1 ? "결제하기" : "다음"}
        </Button>
      </ButtonGroup>
      {step === 1 && (
        <Container
          color={"gray.400"}
          maxW={"xl"}
          fontSize={"0.7rem"}
          marginTop={"1rem!important"}
          ref={termsRef}
        ></Container>
      )}
    </>
  );
};
