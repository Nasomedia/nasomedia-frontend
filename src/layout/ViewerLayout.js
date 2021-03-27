import React from "react";
import { ViewerHeader, ViewerFooter } from "../components/ViewerNavigation";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const ViewerLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  function scrollHandler() {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (clientHeight + scrollTop === scrollHeight || scrollTop <= 15)
      setIsVisible(true);
    else setIsVisible(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <ViewerHeader isVisible={isVisible} />
      <Container onClick={()=>setIsVisible(!isVisible)} maxW={"7xl"} flex={"1 0 auto"} py={4} marginY={14}>
        {children}
      </Container>
      <ViewerFooter isVisible={isVisible} />
    </>
  );
};
