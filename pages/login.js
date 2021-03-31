import {
  Box,
  Button,
  ButtonGroup,
  VStack,
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
        "rgba(240, 240, 240, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      )}
      d="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        boxShadow={"base"}
        maxW={"2xl"}
        borderWidth="1px"
        mx={2}
        minW={"60px"}
        w={"sm"}
        borderRadius="lg"
      >
        <VStack
          zIndex="999"
          padding={4}
          direction={"column"}
          h={"100%"}
          minH={"sm"}
          justify={"center"}
          alignItems={"center"}
          spacing={5}
          css={{
            backgroundColor: useColorModeValue(
              "rgba(255, 255, 255, 0.8)",
              "rgba(36, 42, 54, 0.8)"
            ),
          }}
        >
          <Heading>나소미디어</Heading>
          <Heading
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
        </VStack>
      </Box>
    </Box>
  );
}
