import React from "react";
import { ViewerHeader } from "../components/MainHeader";
import { Container } from "@chakra-ui/react";

export const ViewerLayout = ({ children }) => {
  return (
    <>
      <ViewerHeader />
      <Container maxW={"7xl"} flex={"1 0 auto"} py={8} mt={14}>
        {children}
      </Container>
    </>
  );
};
