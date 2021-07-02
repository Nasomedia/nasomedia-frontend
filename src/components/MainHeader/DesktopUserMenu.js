import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DesktopNavButton from "./DesktopNavButton";

export const DesktopUserMenu = ({ user, logout }) => {
  const router = useRouter();
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
            cursor={"pointer"}
          >
            {user.full_name} <ChevronDownIcon top={-1} />
          </MenuButton>
          <MenuList>
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
