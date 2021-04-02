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
import { useEffect } from "react";

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
      <NavigationLink asPath={asPath} href={`/ranking`}>
        랭킹
      </NavigationLink>
    </>
  );
};

/*
const AppInstallButton = ({ children }) => {
  const activeBg = useColorModeValue("purple.50", "purple.900");
  let installPrompt = null;

  useEffect(() => {
    console.log("Listening for Install prompt");
    window.addEventListener("beforeinstallprompt", (e) => {
      // For older browsers
      e.preventDefault();
      console.log("Install Prompt fired");
      installPrompt = e;
      // See if the app is already installed, in that case, do nothing
      if (
        (window.matchMedia &&
          window.matchMedia("(display-mode: standalone)").matches) ||
        window.navigator.standalone === true
      ) {
        return false;
      }
    });
  }, []);

  const installApp = async () => {
    if (!installPrompt) {
      alert(
        "설치가 불가능합니다.\n(이미 설치되어 있거나, 브라우저가 지원하지 않습니다.)"
      );
      return false;
    }

    installPrompt.prompt();

    let outcome = await installPrompt.userChoice;

    if (outcome.outcome == "accepted") {
      console.log("App Installed");
    } else {
      console.log("App not installed");
    }
    // Remove the event reference
    installPrompt = null;
  };

  return (
    <Button
      fontSize={"sm"}
      rounded={"md"}
      px={3}
      py={2}
      ml={"-12px!important"}
      bg={installPrompt ? activeBg : undefined}
      fontWeight={installPrompt ? 400 : 600}
      color={
        installPrompt
          ? useColorModeValue("purple.700", "purple.400")
          : useColorModeValue("gray.700", "gray.400")
      }
      _hover={{
        bg: installPrompt
          ? activeBg
          : useColorModeValue("gray.100", "gray.900"),
      }}
      onClick={() => {
        installApp();
      }}
    >
      {children}
    </Button>
  );
};
*/

const MobileDrawerLinks = ({ user }) => {
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
        {user ? (
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
            <Divider />
            {/* <AppInstallButton>앱 설치하기</AppInstallButton> */}
          </Stack>
        ) : (
          <Stack spacing={1}>
            <DrawerPublicLinks asPath={asPath} />
            <Divider />
            {/* <AppInstallButton>앱 설치하기</AppInstallButton> */}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export const MobileDrawerNavigation = (props) => {
  // const user = { nickname: "Naso" };
  const user = null;
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
        <MobileDrawerLinks user={user} />
      </DrawerBody>
    </DrawerContent>
  );
};
