import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Link,
  Stack,
  useColorModeValue,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  Heading,
  Button,
  Divider,
} from "@chakra-ui/react";

const NavigationLink = ({ href, children, asPath }) => {
  const isActive = asPath === href;
  const activeBg = useColorModeValue("purple.50", "purple.900");

  return (
    <NextLink href={href} passHref>
      <Link
        fontSize={"sm"}
        rounded={"md"}
        px={3}
        py={2}
        ml={"-12px!important"}
        bg={isActive ? activeBg : undefined}
        fontWeight={isActive ? 600 : 400}
        color={
          isActive
            ? useColorModeValue("purple.700", "purple.400")
            : useColorModeValue("gray.700", "gray.400")
        }
        _hover={{
          bg: isActive ? activeBg : useColorModeValue("gray.100", "gray.900"),
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const DrawerPublicLinks = ({ asPath }) => {
  return (
    <>
      <NavigationLink asPath={asPath} href={`/`}>
        홈
      </NavigationLink>
      <NavigationLink asPath={asPath} href={`/finder`}>
        상세검색
      </NavigationLink>
      <NavigationLink asPath={asPath} href={`/update`}>
        업데이트
      </NavigationLink>
      <NavigationLink asPath={asPath} href={`/rank`}>
        랭킹
      </NavigationLink>
    </>
  );
};

const MobileDrawerLinks = ({ isUser }) => {
  const { asPath } = useRouter();
  return (
    <Stack
      as={"nav"}
      spacing={6}
      maxW={{ md: "3xs" }}
      w={"full"}
      flexShrink={0}
      // {...props}
    >
      <Stack>
        {isUser ? (
          <Stack spacing={1}>
            <DrawerPublicLinks asPath={asPath} />
            <Divider />
            <NavigationLink asPath={asPath} href={`/user/me`}>
              내 보관함
            </NavigationLink>
            <NavigationLink asPath={asPath} href={`/setting`}>
              설정
            </NavigationLink>
            <NavigationLink asPath={asPath} href={`/logout`}>
              로그아웃
            </NavigationLink>
          </Stack>
        ) : (
          <Stack spacing={1}>
            <DrawerPublicLinks asPath={asPath} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export const MobileDrawerNavigation = (props) => {
  const user = { nickname: "Naso" };
  // const user = null;
  const router = useRouter();
  return (
    <DrawerContent>
      <DrawerHeader>
        <Stack spacing={6} w={"full"} flexShrink={0}>
          <DrawerCloseButton />
          {user ? (
            <>
              <Heading spacing={1}>{user.nickname}님, 환영합니다!</Heading>
              <Button
                onClick={() => router.push("/notifications")}
                colorScheme="purple"
                variant="outline"
              >
                알림
              </Button>
            </>
          ) : (
            <>
              <Heading spacing={1}>나소미디어에 오신것을 환영합니다.</Heading>
              <Button
                onClick={() => router.push("/login")}
                colorScheme="purple"
                variant="outline"
              >
                로그인/가입
              </Button>
            </>
          )}
        </Stack>
      </DrawerHeader>
      <DrawerBody>
        <MobileDrawerLinks isUser={user} />
      </DrawerBody>
    </DrawerContent>
  );
};
