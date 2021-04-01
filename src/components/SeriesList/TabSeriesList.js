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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

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

const ListBox = ({ imageURL, title }) => {
  return (
    <Box width={"9rem"} height={"2xs"}>
      <Image width={"8.5rem"} objectFit="cover" h={"11rem"} borderRadius="lg" src={imageURL} />
      <Text width={"8.5rem"} maxHeight={"2.25rem"} height={"auto"} mt="1" lineHeight="tight">
        {title}
      </Text>
    </Box>
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
        <p>랭킹</p>
      </TabPanel>
      <TabPanel>
        <p>랭킹</p>
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
      >
        <TabSeriesListTabs index={tabIndex} />
        <TabSeriesListTabPanels updates={updates} />
      </Tabs>
    </Box>
  );
};
