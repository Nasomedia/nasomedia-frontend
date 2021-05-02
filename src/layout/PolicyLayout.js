import {
  Container,
  Heading,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./policy.module.css";

const NavigationLink = ({ href, children }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;
  const activeBg = useColorModeValue("purple.50", "purple.900");

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={"sm"}
        rounded={"md"}
        px={3}
        py={2}
        bg={isActive ? activeBg : undefined}
        fontWeight={isActive ? 600 : 400}
        color={
          isActive
            ? useColorModeValue("purple.700", "purple.400")
            : useColorModeValue("gray.700", "gray.400")
        }
        _hover={{
          bg: isActive ? activeBg : useColorModeValue("gray.100", "gray.900"),
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const PolicyLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | 나소미디어</title>
      </Head>
      <div className={styles.contentWrapper}>
        <Container
          sx={{
            color: "#aaa",
            fontSize: "13px",
            margin: "20px auto",
            backgroundColor: "white",
            padding: "30px 60px",
            borderRadius: "5px",
            border: "1px solid #aaa",
          }}
          maxW={"4xl"}
          flex={"1 0 auto"}
          py={8}
          mt={14}
        >
          <Stack>
            <NavigationLink href={"/policy/privacy"}>
              개인정보 처리방침
            </NavigationLink>
            <NavigationLink href={"/policy/terms/service"}>
              서비스 이용 약관
            </NavigationLink>
            <NavigationLink href={"/policy/terms/youth"}>
              청소년 보호 정책
            </NavigationLink>
            <Heading mb={6} as={"h3"}>
              {title}
            </Heading>
            {children}
          </Stack>
        </Container>
      </div>
    </>
  );
};
