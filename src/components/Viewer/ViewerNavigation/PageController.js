import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, Flex } from "@chakra-ui/react";
import MotionFlex from "../../motion/MotionFlex";

const LeftController = ({ onClick, isVisible }) => {
  return (
    <Box onClick={onClick}>
      <MotionFlex
        as={"nav"}
        pos={"fixed"}
        top="60px"
        left={"0"}
        w={"25vw"}
        h={"calc(100vh - 120px)"}
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
    <Box onClick={onClick}>
      <MotionFlex
        aria-label={"next-image"}
        as={"nav"}
        pos={"fixed"}
        top="60px"
        right={"0"}
        w={"25vw"}
        h={"calc(100vh - 120px)"}
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
    <Box onClick={onClick}>
      <Flex
        as={"nav"}
        pos={"fixed"}
        top="60px"
        right={"0"}
        w={"50vw"}
        h={"calc(100vh - 120px)"}
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
  const setNextIndex = () => {
    if (length > pageIndex + 1) {
      setPageIndex(pageIndex + 1);
    }
  };
  const setPreviousIndex = () => {
    if (pageIndex - 1 >= 0) {
      setPageIndex(pageIndex - 1);
    }
  };
  return (
    <div className={"PageController_Wrapper"}>
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
