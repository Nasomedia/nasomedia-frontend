import React from "react";
import { MainHeader } from "../components/MainHeader";
import { Container } from "@chakra-ui/react";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Container maxW={"7xl"} flex={"1 0 auto"} py={8} mt={20}>
        {children}
      </Container>
    </>
  );
};
