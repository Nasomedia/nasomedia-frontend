import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Box,
  Spacer,
  useMediaQuery,
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

const TabSeriesListTabPanels = () => {
  return (
    <TabPanels>
      <TabPanel>
        <p>업데이트</p>
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
  const [isSmallerThan440] = useMediaQuery("(max-width: 440px)");
  return (
    <Box {...props}>
      {isSmallerThan440 ? (
        <Tabs onChange={(index) => setTabIndex(index)} size="sm">
          <TabSeriesListTabs index={tabIndex} />
          <TabSeriesListTabPanels />
        </Tabs>
      ) : (
        <Tabs isFitted onChange={(index) => setTabIndex(index)} size="md">
          <TabSeriesListTabs index={tabIndex} />
          <TabSeriesListTabPanels />
        </Tabs>
      )}
    </Box>
  );
};