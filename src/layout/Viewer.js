import React from "react";
import {
  ViewerHeader,
  ViewerFooter,
} from "../components/Viewer/ViewerNavigation";
import {
  Container,
  useColorModeValue,
  useOutsideClick,
} from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import {
  ViewerPageImageList,
  ViewerScrollImageList,
} from "../components/Viewer/ViewerImageList";
import { PageController } from "../components/Viewer/ViewerNavigation/PageController";

export const Viewer = ({
  children,
  episode,
  images,
  nextEpisode,
  prevEpisode,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScroll, setIsScroll] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);

  const ref = React.useRef();

  const scrollHandler = useCallback(
    (e) => {
      if (!isScroll) return;
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
    },
    [isScroll]
  );

  useOutsideClick({
    ref: ref,
    handler: () => {
      if (isScroll) setIsVisible(!isVisible);
    },
  });

  useEffect(() => {
    if (isScroll) {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isScroll]);
  return (
    <>
      <div ref={ref} className={"ViewerMenu_Wrapper"}>
        <ViewerHeader
          isVisible={isVisible}
          isScroll={isScroll}
          setIsScroll={setIsScroll}
          episode={episode}
        />
        <ViewerFooter
          isVisible={isVisible}
          nextEpisode={nextEpisode}
          prevEpisode={prevEpisode}
        />
      </div>
      {isScroll ? (
        <ViewerScrollImageList images={images || null}></ViewerScrollImageList>
      ) : (
        <>
          {images && (
            <PageController
              pageIndex={pageIndex}
              setPageIndex={setPageIndex}
              length={images.length}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          )}
          <ViewerPageImageList
            images={images || null}
            index={images && pageIndex}
          ></ViewerPageImageList>
        </>
      )}
    </>
  );
};
