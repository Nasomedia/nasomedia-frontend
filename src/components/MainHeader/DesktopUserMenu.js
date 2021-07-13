import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Divider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DesktopNavButton from "./DesktopNavButton";
import useCash from "../../hooks/useCash";

export const DesktopUserMenu = ({ user, logout }) => {
  const router = useRouter();
  const { amount } = useCash();
  return (
    <>
      <DesktopNavButton href="/notifications">
        <BellIcon w={4} h={4} />
      </DesktopNavButton>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Menu size={"sm"} placement={"bottom-end"}>
          <MenuButton
            fontWeight={"medium"}
            as={Button}
            rounded={"full"}
            paddingInlineEnd={"2.5"}
            cursor={"pointer"}
          >
            {user.full_name} <ChevronDownIcon top={-1} />
          </MenuButton>
          <MenuList>
            <Flex
              fontSize={"sm"}
              _hover={{ background: "gray.100", cursor: "pointer" }}
              onClick={() => {
                router.push("/user/me/cash");
              }}
              justifyContent={"space-between"}
              sx={{
                outline: "2px solid transparent",
                outlineOffset: "2px",
                paddingTop: "0.4rem",
                paddingBottom: "0.4rem",
                paddingInlineStart: "0.8rem",
                paddingInlineEnd: "0.8rem",
                transition: "background 50ms ease-in 0s",
              }}
            >
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                내 캐시
              </Text>
              <Text color={useColorModeValue("purple.600", "purple.400")}>
                {amount.toLocaleString()}원
              </Text>
            </Flex>
            <MenuDivider />
            <MenuItem
              fontSize={"sm"}
              onClick={() => {
                router.push("/user/me/inbox");
              }}
            >
              내 보관함
            </MenuItem>
            <MenuItem
              fontSize={"sm"}
              onClick={() => {
                router.push("/settings");
              }}
            >
              설정
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize={"sm"}
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              로그아웃
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};
