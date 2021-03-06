import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  useColorMode,
  Heading,
  Img,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

import { MobileNav } from "./MobileNav";
import { DesktopNavLeft } from "./DesktopNavLeft";
import { DesktopNavRight } from "./DesktopNavRight";

import useUser from "../../hooks/useUser";

export const MainHeader = () => {
  const { isOpen: isMobileNavOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLoggedIn, user, logout } = useUser();
  const onMobileNavToggle = onOpen;
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
            {/* <IconButton
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
            /> */}
          </Flex>

          <Flex
            flex={{ base: 1, md: "auto" }}
            justify={{ base: "center", md: "start" }}
            alignItems={{ md: "center" }}
          >
            <NextLink href={"/"} passHref>
              <Stack
                as={"a"}
                direction={"row"}
                alignItems={"center"}
                spacing={{ base: 2, sm: 4 }}
              >
                <Img
                  src="/icons/nasoicon.svg"
                  alt="logo"
                  w={{ base: 8 }}
                  h={{ base: 8 }}
                />
                <Heading
                  as={"h1"}
                  fontSize={"xl"}
                  display={{ base: "none", md: "block" }}
                >
                  ???????????????
                </Heading>
              </Stack>
            </NextLink>
            <DesktopNavLeft ml={4} display={{ base: "none", md: "flex" }} />
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={8}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNavRight
              user={user}
              logout={logout}
            />
            <IconButton
              onClick={onMobileNavToggle}
              display={{ base: "flex", md: "none" }}
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
            {!isLoggedIn ? (
              <IconButton
                size={"sm"}
                variant={"ghost"}
                aria-label={"Toggle Color Mode"}
                onClick={toggleColorMode}
                display={{ base: "none", md: "flex" }}
                icon={
                  colorMode == "light" ? (
                    <IoMoon size={18} />
                  ) : (
                    <IoSunny size={18} />
                  )
                }
              />
            ) : null}
          </Stack>
        </Container>
      </Flex>
      <MobileNav
        isLoggedIn={isLoggedIn}
        user={user}
        logout={logout}
        isOpen={isMobileNavOpen}
        onClose={onClose}
      />
    </Box>
  );
};
