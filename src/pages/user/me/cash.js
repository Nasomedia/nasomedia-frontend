import {
  Box,
  Heading,
  VStack,
  Spacer,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { MainLayout } from "../../../layout/MainLayout";
import useCash from "../../../hooks/useCash";
import { useEffect } from "react";
import CommingSoon from "../../../components/CommingSoon";
import { useRouter } from "next/router";
import PlaceholderLogo from "../../../components/PlaceholderLogo";

const DepositList = ({ deposit }) => {
  return [...deposit].reverse().map((deposit, idx) => (
    <Box
      key={idx + "-deposit"}
      // maxW="sm"
      borderBottom="1px"
      borderColor={"gray.200"}
      overflow="hidden"
    >
      <Box p="4">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="sm"
            // textTransform="uppercase"
          >
            {deposit.description ? deposit.description : "캐시 충전"}
          </Box>
          <Spacer />
          <Text fontSize={"sm"}>
            {deposit.approved_at
              ? new Date(deposit.approved_at).toLocaleDateString()
              : `미결제(${new Date(deposit.request_at).toLocaleDateString()})`}
          </Text>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          color={deposit.approved_at ? "unset" : "gray.400"}
          textDecor={
            deposit.approved_at
              ? "unset"
              : "line-through var(--chakra-colors-gray-400)"
          }
        >
          + {deposit.deposit_amount.toLocaleString()}원
        </Box>
      </Box>
    </Box>
  ));
};

export default function MyCash() {
  const router = useRouter();
  const { amount, deposit, usage } = useCash();
  useEffect(() => {
    console.log(deposit);
    console.log(usage);
  });
  return (
    <MainLayout>
      <Head>
        <title>내 캐시 | 나소미디어</title>
      </Head>
      <VStack alignItems={"center"}>
        <Heading alignSelf={{ md: "start" }} fontSize={"lg"}>
          내 캐시
        </Heading>
        <Spacer />
        <Stack w={"90%"} direction={{ base: "row", md: "column" }}>
          <Heading
            pl={{ base: "4", md: "0" }}
            alignSelf={{ base: "start", md: "center" }}
          >
            {amount.toLocaleString()}원
          </Heading>
          <Spacer />
          <Button
            onClick={() => router.push("/payment/cash")}
            colorScheme="purple"
            variant="ghost"
            alignSelf={{ base: "start", md: "center" }}
            fontSize={"sm"}
          >
            캐시 충전하러 가기
          </Button>
        </Stack>
        <Tabs w={"100%"} mt={2} maxW={"4xl"} isFitted variant="enclosed">
          <TabList my="2">
            <Tab>충전 기록</Tab>
            <Tab>사용 기록</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {deposit.length > 0 ? (
                <DepositList deposit={deposit} />
              ) : (
                <>
                  <Spacer mt={"10vh"} />
                  <PlaceholderLogo
                    isBounce={false}
                    description={"충전한 내역이 없습니다"}
                  />
                </>
              )}
            </TabPanel>
            <TabPanel>
              <CommingSoon />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </MainLayout>
  );
}
