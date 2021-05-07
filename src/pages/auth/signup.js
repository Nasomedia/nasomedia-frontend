import {
  Box,
  Center,
  Heading,
  Img,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  SlideFade,
} from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { SignupCard, Agreements, SignupForm } from "../../components/Auth";

export default function Signup() {
  const [step, setStep] = React.useState(0);
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100%"
      py="24"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <LinkBox
          _hover={{ cursor: "pointer" }}
          as={Center}
          mx="auto"
          h="8"
          mb={{ base: "10", md: "20" }}
        >
          <Img
            src="/icons/nasoicon.svg"
            alt="logo"
            w={{ base: 10 }}
            h={{ base: 10 }}
          />
          <NextLink href={"/"} passHref>
            <LinkOverlay
              as={Heading}
              ml={4}
              as={"h3"}
              textAlign="center"
              size="lg"
              fontSize={"x-large"}
              fontWeight="bold"
            >
              나소미디어
            </LinkOverlay>
          </NextLink>
        </LinkBox>
        <Heading mb={"12"} textAlign="center" size="xl" fontWeight="bold">
          회원가입
        </Heading>
        {step === 0 && (
          <SlideFade in={step === 0 ? true : false} offsetY={"20px"}>
            <SignupCard>
              <Agreements next={() => setStep(1)} />
            </SignupCard>
          </SlideFade>
        )}
        {step === 1 && (
          <SlideFade in={step === 1 ? true : false} offsetY={"20px"}>
            <SignupCard>
              <SignupForm />
            </SignupCard>
          </SlideFade>
        )}
      </Box>
    </Box>
  );
}
