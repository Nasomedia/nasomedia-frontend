import {
  Box,
  Flex,
  Container,
  Stack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import MotionFlex from "../../motion/MotionFlex";
import { useRouter } from "next/router";

export const ViewerFooter = ({
  isVisible,
  nextEpisode,
  prevEpisode,
  setPageIndex,
}) => {
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
                    router.push(`/episodes/${prevEpisodeID}`);
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
                    router.push(`/episodes/${nextEpisodeID}`);
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
        </Container>
      </MotionFlex>
    </Box>
  );
};
