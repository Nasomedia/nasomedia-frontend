import {
  Box,
  Flex,
  Container,
  Stack,
  IconButton,
  useColorModeValue,
  useColorMode,
  Heading,
  Img,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { IoHome, IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";
import { useRouter } from "next/router";
import MotionFlex from "../../motion/MotionFlex";

export const ViewerHeader = ({ isVisible, episode }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box>
      <MotionFlex
        as={"header"}
        pos={"fixed"}
        top="0"
        overflow="hidden"
        w={"full"}
        minH={"60px"}
        animate={{ opacity: isVisible ? 1 : 0 }}
        boxShadow={"sm"}
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
        <Container as={Flex} maxW={"7xl"} alignItems={"center"}>
          <Flex flex={1} alignItems={"center"}>
            <IconButton
              onClick={() => router.push(`/series/${episode.series_id}`)}
              icon={<ArrowLeftIcon w={3} h={3} />}
              variant={"ghost"}
              size={"sm"}
              aria-label={"Go Series"}
            />
            <Heading mx={2} as={"h1"} fontSize={"md"}>
              {episode.title}
            </Heading>
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={4}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Go Home"}
              onClick={() => router.push("/")}
              icon={<IoHome size={18} />}
            />
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
          </Stack>
        </Container>
      </MotionFlex>
      {/* <MobileNav isOpen={isMobileNavOpen} onClose={onClose} /> */}
    </Box>
  );
};
