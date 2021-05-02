import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, Flex, useToast } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";
import MotionFlex from "../../motion/MotionFlex";

const LeftController = ({ onClick, isVisible }) => {
  return (
    <Box
      onClick={onClick}
      css={{
        userSelect: "none",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <MotionFlex
        as={"nav"}
        pos={"fixed"}
        top="60px"
        left={"0"}
        w={"25vw"}
        h={"calc(100% - 120px)"}
        animate={{ opacity: isVisible ? 1 : 0 }}
        zIndex="999"
        alignItems={"center"}
        justify={"center"}
        backgroundColor={{
          base: "transparent",
          md: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(46, 52, 64, 0.8)"
          ),
        }}
        backdropFilter={{ base: "none", md: "saturate(180%) blur(5px)" }}
      >
        <ChevronLeftIcon w={6} h={6} />
      </MotionFlex>
    </Box>
  );
};

const RightController = ({ onClick, isVisible }) => {
  return (
    <Box
      onClick={onClick}
      css={{
        userSelect: "none",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <MotionFlex
        aria-label={"next-image"}
        as={"nav"}
        pos={"fixed"}
        top="60px"
        right={"0"}
        w={"25vw"}
        h={"calc(100% - 120px)"}
        animate={{ opacity: isVisible ? 1 : 0 }}
        zIndex="999"
        alignItems={"center"}
        justify={"center"}
        backgroundColor={{
          base: "transparent",
          md: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(46, 52, 64, 0.8)"
          ),
        }}
        backdropFilter={{ base: "none", md: "saturate(180%) blur(5px)" }}
      >
        <ChevronRightIcon w={6} h={6} />
      </MotionFlex>
    </Box>
  );
};

const CenterController = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      css={{
        userSelect: "none",
        msUserSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <Flex
        as={"nav"}
        pos={"fixed"}
        top="60px"
        right={"25vw"}
        w={"50vw"}
        h={"calc(100% - 120px)"}
        zIndex="999"
        alignItems={"center"}
        justify={"center"}
      ></Flex>
    </Box>
  );
};

export const PageController = ({
  pageIndex,
  setPageIndex,
  length,
  isVisible,
  setIsVisible,
}) => {
  const toast = useToast();
  const firstIndex = "info-first-index";
  const lastIndex = "info-last-index";
  const setNextIndex = () => {
    if (length > pageIndex + 1) {
      setPageIndex(pageIndex + 1);
    }
    if (length === pageIndex + 1) {
      if (!toast.isActive(lastIndex)) {
        toast({
          id: lastIndex,
          title: "마지막 페이지입니다.",
          status: "info",
          variant: "left-accent",
          position: "bottom-right",
          isClosable: true,
        });
      }
    }
  };
  const setPreviousIndex = () => {
    if (pageIndex - 1 >= 0) {
      setPageIndex(pageIndex - 1);
    }
    if (pageIndex === 0) {
      if (!toast.isActive(firstIndex)) {
        toast({
          id: firstIndex,
          title: "첫번째 페이지입니다.",
          status: "info",
          variant: "left-accent",
          position: "bottom-right",
          isClosable: true,
        });
      }
    }
  };
  const swipeConfig = {
    preventDefaultTouchmoveEvent: false, // call e.preventDefault *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setNextIndex();
    },
    onSwipedRight: () => {
      setPreviousIndex();
    },
    ...swipeConfig,
  });
  return (
    <div className={"PageController_Wrapper"} {...swipeHandlers}>
      <LeftController onClick={setPreviousIndex} isVisible={isVisible} />
      <CenterController
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      />
      <RightController onClick={setNextIndex} isVisible={isVisible} />
    </div>
  );
};
