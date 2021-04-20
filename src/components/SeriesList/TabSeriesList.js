import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  Spacer,
  Image,
  useBreakpointValue,
  Text,
  HStack,
  LinkBox,
  LinkOverlay,
  Center,
  Img,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useState } from "react";
import { TabListImageSkeleton } from "../ImageSkeleton";

const TabSeriesListTabs = ({ index }) => {
  const hrefs = ["update", "ranking", "ranking?type=new"];
  const router = useRouter();
  return (
    <TabList>
      <Tab>업데이트</Tab>
      <Tab>랭킹</Tab>
      <Tab>신작</Tab>
      <Spacer />
      <Button
        colorScheme={"purple"}
        variant={"ghost"}
        onClick={() => router.push(hrefs[index])}
      >
        더보기
      </Button>
    </TabList>
  );
};

const ListBox = ({ imageURL, title, id }) => {
  return (
    <NextLink href={`/series/${id}`} passHref>
      <Box as={"a"} width={"9rem"} height={"56"}>
        <Image
          width={"8.5rem"}
          htmlWidth={"8.5rem"}
          h={"11rem"}
          htmlHeight={"11rem"}
          objectFit="cover"
          fallback={<TabListImageSkeleton />}
          borderRadius="lg"
          src={imageURL}
          alt={`thumbnail_image-${title}`}
        />
        <Text
          width={"8.375rem"}
          h={"2.4rem"}
          lineHeight={"1.2rem"}
          mt={"1"}
          pl={"0.05rem"}
          textOverflow={"ellipsis"}
          lineHeight={"short"}
          sx={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {title}
        </Text>
      </Box>
    </NextLink>
  );
};

const UpdateList = ({ updates }) => {
  return (
    <HStack
      pt={3}
      maxW={"full"}
      overflowX="scroll"
      spacing={4}
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {updates &&
        updates.map((updateItem) => (
          <ListBox
            key={`${updateItem.id}`}
            imageURL={updateItem.thumbnail}
            title={updateItem.title}
            id={`${updateItem.id}`}
          />
        ))}
    </HStack>
  );
};

const TabSeriesListTabPanels = ({ updates }) => {
  return (
    <TabPanels>
      <TabPanel>
        <Text>최근 업데이트된 목록</Text>
        <UpdateList updates={updates} />
      </TabPanel>
      <TabPanel>
        <Text>랭킹</Text>
        <Center flexDirection={"column"}>
          <Img mt={4} src={"/error_black.png"} />
          <Text mt={8}>아직 준비중입니다.</Text>
        </Center>
      </TabPanel>
      <TabPanel>
        <Text>신작</Text>
        <Center flexDirection={"column"}>
          <Img mt={4} src={"/error_black.png"} />
          <Text mt={8}>아직 준비중입니다.</Text>
        </Center>
      </TabPanel>
    </TabPanels>
  );
};

export const TabSeriesList = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const isLargerThan440 = useBreakpointValue({ base: false, sm: true });
  const { updates } = props;
  return (
    <Box {...props}>
      <Tabs
        isFitted={isLargerThan440}
        onChange={(index) => setTabIndex(index)}
        size="sm"
        colorScheme={"purple"}
      >
        <TabSeriesListTabs index={tabIndex} />
        <TabSeriesListTabPanels updates={updates} />
      </Tabs>
    </Box>
  );
};
