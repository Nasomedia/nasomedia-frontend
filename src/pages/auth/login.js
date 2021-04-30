import {
  Box,
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
  Img,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {
  Card,
  DividerWithText,
  Link,
  LoginForm,
} from "../../components/LoginPage";

export default function Login() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="24"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Center mx="auto" h="8" mb={{ base: "10", md: "20" }}>
          <Img
            src="/icons/nasoicon.svg"
            alt="logo"
            w={{ base: 10 }}
            h={{ base: 10 }}
          />
          <Heading
            ml={4}
            as={"h3"}
            textAlign="center"
            size="lg"
            fontWeight="bold"
          >
            나소미디어
          </Heading>
        </Center>
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          로그인
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Link href="#">이메일로 가입하기(현재 지원하지 않습니다)</Link>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">다른 방법으로 계속(개발중)</DividerWithText>
          <SimpleGrid mt="6" columns={3} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
}
