import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <Box
      width={"full"}
      height={"100vh"}
      bgGradient={useColorModeValue(
        "linear(to-r, gray.300, purple.400, blue.600)",
        "rgba(255, 255, 255, 0.8)"
      )}
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box b borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Flex
          boxShadow={"sm"}
          zIndex="999"
          maxW={"2xl"}
          minW={"md"}
          padding={4}
          maxH={"2xl"}
          minH={"md"}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          css={{
            opacity: "60%",
            backdropFilter: "saturate(180%) blur(10px)",
            backgroundColor: useColorModeValue(
              "rgba(255, 255, 255, 0.8)",
              "rgba(26, 32, 44, 0.8)"
            ),
          }}
        >
          <Heading
            mb={4}
            css={{
              opacity: "100%",
            }}
            fontSize="md"
          >
            현재 로그인을 지원하고 있지 않습니다.
          </Heading>
          <ButtonGroup>
            <Button
              onClick={() => {
                router.push("/");
              }}
              colorScheme="purple"
              fontWeight={"medium"}
            >
              홈
            </Button>
            <Button
              onClick={() => {
                router.back();
              }}
              colorScheme="purple"
              fontWeight={"medium"}
            >
              뒤로가기
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
}
