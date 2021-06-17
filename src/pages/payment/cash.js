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
import CashItemStack from "../../components/Payment/Cash/CashItemStack";
import { MainLayout } from "../../layout/MainLayout";

const SeriesDetail = () => {
  const [step, setStep] = React.useState(0);
  const [value, setValue] = React.useState(0);
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
          <SlideFade in={step === 0} offsetY="20px">
            <CashItemStack setValue={setValue} value={value} />
          </SlideFade>
          <SlideFade in={step === 1} offsetY="20px"></SlideFade>
          <ButtonGroup variant="outline" spacing="12">
            {step > 0 && (
              <Button colorScheme="gray" onClick={() => setStep(0)}>
                이전
              </Button>
            )}
            <Button
              colorScheme="purple"
              variant={step === 1 ? "solid" : "outline"}
              onClick={() => {
                if (step === 1) {
                } else {
                  setStep(1);
                }
              }}
            >
              {step === 1 ? "결제하기" : "다음"}
            </Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </MainLayout>
  );
};
export default SeriesDetail;
