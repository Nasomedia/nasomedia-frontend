import React, { useEffect, useState, useCallback } from "react";
import {
  ViewerHeader,
  ViewerFooter,
} from "../components/Viewer/ViewerNavigation";
import { useOutsideClick } from "@chakra-ui/react";
import {
  ViewerPageImageList,
  ViewerScrollImageList,
} from "../components/Viewer/ViewerImageList";
import { PageController } from "../components/Viewer/ViewerNavigation/PageController";
import { useRouter } from "next/router";

export const Viewer = ({ episode, images, nextEpisode, prevEpisode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrollView, setIsScrollView] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();

  const menuRef = React.useRef();

  const scrollHandler = useCallback(
    (e) => {
      if (!isScrollView) return;
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
    [isScrollView]
  );

  // useOutsideClick({
  //   ref: menuRef,
  //   handler: () => {
  //     if (isScrollView) setIsVisible(!isVisible);
  //   },
  // });

  useEffect(() => {
    if (isScrollView) {
      window.addEventListener("scroll", scrollHandler);
    }
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [isScrollView]);

  useEffect(() => {
    setPageIndex(0);
  }, [router]);
  return (
    <>
      <div ref={menuRef} className={"ViewerMenu_Wrapper"}>
        <ViewerHeader
          isVisible={isVisible}
          isScroll={isScrollView}
          setIsScroll={setIsScrollView}
          episode={episode}
        />
        <ViewerFooter
          isVisible={isVisible}
          nextEpisode={nextEpisode}
          prevEpisode={prevEpisode}
          setPageIndex={setPageIndex}
        />
      </div>
      {isScrollView ? (
        <ViewerScrollImageList
          onClick={() => {
            if (isScrollView) setIsVisible(!isVisible);
          }}
          images={images || null}
        ></ViewerScrollImageList>
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
