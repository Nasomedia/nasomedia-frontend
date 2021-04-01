import React from "react";
import {
  ViewerHeader,
  ViewerFooter,
} from "../components/Viewer/ViewerNavigation";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import ViewerImageList from "../components/Viewer/ViewerImageList";

export const Viewer = ({
  children,
  episode,
  images,
  nextEpisode,
  prevEpisode,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollHandler = useCallback(() => {
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
  });
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <ViewerHeader isVisible={isVisible} />
      <Container
        onClick={() => setIsVisible(!isVisible)}
        maxW={"7xl"}
        flex={"1 0 auto"}
        py={4}
        px={0}
        marginY={10}
      >
        <Container maxW={"7xl"}>{children}</Container>
        {images && <ViewerImageList images={images}></ViewerImageList>}
      </Container>
      <ViewerFooter
        isVisible={isVisible}
        nextEpisode={nextEpisode}
        prevEpisode={prevEpisode}
      />
    </>
  );
};
