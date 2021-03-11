import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Image,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

import { MobileNav } from "./MobileNav";
import { DesktopNavLeft } from "./DesktopNavLeft";
import { DesktopNavRight } from "./DesktopNavRight";

export const MainHeader = () => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const onMobileNavToggle = onToggle;
  return (
    <Box>
      <Flex
        as={"header"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"7xl"} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onMobileNavToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              size={"sm"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: "auto" }}
            justify={{ base: "center", md: "start" }}
          >
            <NextLink href={"/"} passHref>
              <Stack
                as={"a"}
                direction={"row"}
                alignItems={"center"}
                spacing={{ base: 2, sm: 4 }}
              >
                <Image
                  src="/icons/nasoicon.png"
                  w={{ base: 8 }}
                  h={{ base: 8 }}
                />
                <Heading
                  as={"h1"}
                  fontSize={"xl"}
                  display={{ base: "none", md: "block" }}
                >
                  나소미디어
                </Heading>
                <Stack
                  direction={"row"}
                  align={"center"}
                  spacing={8}
                  flex={{ base: 1, md: "auto" }}
                  justify={"flex-end"}
                >
                  <DesktopNavLeft display={{ base: "none", md: "flex" }} />
                </Stack>
              </Stack>
            </NextLink>
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={8}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNavRight display={{ base: "none", md: "flex" }} />
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
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} />
    </Box>
  );
};
