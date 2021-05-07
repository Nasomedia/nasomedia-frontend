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
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import NextLink from "next/link";
import * as React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Card, DividerWithText, Link, LoginForm } from "../../components/Auth";
import cookies from "next-cookies";


export default function Login() {
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
        <Heading textAlign="center" size="xl" fontWeight="bold">
          로그인
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <NextLink href="/auth/signup" passHref>
            <Link href="/auth/signup">
              이메일로 가입하기
            </Link>
          </NextLink>
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