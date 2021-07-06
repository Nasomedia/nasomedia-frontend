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

export const CashDepositStepGroup = () => {
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
                step={0}
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
          onClick={() => {
            if (step !== 1) {
              setStep(1);
            }
            if (step === 1 && amount !== 0 && method !== "" && isTermsChecked) {
              useEffect(() => {
                // await
                // await requestPayment(method, amount, orderId, orderName)
              }, []);
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
