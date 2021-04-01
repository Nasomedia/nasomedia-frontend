import {
  Box,
  Flex,
  Container,
  Stack,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import {
  CloseIcon,
  HamburgerIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";
import MotionFlex from "../../motion/MotionFlex";
import { useRouter } from "next/router";

export const ViewerFooter = ({ isVisible, nextEpisode, prevEpisode }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const nextEpisodeID = nextEpisode ? nextEpisode.id : null;
  const prevEpisodeID = prevEpisode ? prevEpisode.id : null;
  const router = useRouter();
  return (
    <Box>
      <MotionFlex
        as={"footer"}
        pos={"fixed"}
        bottom="0"
        overflow="hidden"
        w={"full"}
        minH={"60px"}
        animate={{ opacity: isVisible ? 1 : 0 }}
        boxShadow={"base"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(46, 52, 64, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          <Flex flex={{ base: 1 }}>
            <Flex flex={{ base: 1 }} justify={{ base: "center" }}>
              {isVisible && (
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={{ base: 10 }}
                >
                  <IconButton
                    variant="outline"
                    onClick={() => {
                      router.push(`/episode/${prevEpisodeID}`);
                    }}
                    colorScheme={prevEpisodeID ? "purple" : "gray"}
                    borderRadius={"full"}
                    aria-label="Previous"
                    icon={<ChevronLeftIcon />}
                    isDisabled={prevEpisodeID ? false : true}
                  />
                  <IconButton
                    variant="outline"
                    onClick={() => {
                      router.push(`/episode/${nextEpisodeID}`);
                    }}
                    colorScheme={nextEpisodeID ? "purple" : "gray"}
                    borderRadius={"full"}
                    aria-label="Next"
                    icon={<ChevronRightIcon />}
                    isDisabled={nextEpisodeID ? false : true}
                  />
                </Stack>
              )}
            </Flex>
          </Flex>
        </Container>
      </MotionFlex>
    </Box>
  );
};
