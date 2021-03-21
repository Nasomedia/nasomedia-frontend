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

export const TabSeriesList = (props) => {
  const hrefs = ["update", "ranking", "ranking?type=new"];
  const [tabIndex, setTabIndex] = useState(0);
  const [isLargerThan440] = useMediaQuery("(min-width: 440px)");
  const router = useRouter();
  return (
    <Box {...props}>
      <Tabs
        isFitted={isLargerThan440 ? true : false}
        onChange={(index) => setTabIndex(index)}
        size={isLargerThan440 ? "md" : "sm"}
      >
        <TabList>
          <Tab>업데이트</Tab>
          <Tab>랭킹</Tab>
          <Tab>신작</Tab>
          <Spacer />
          <Button
            colorScheme={"purple"}
            variant={"ghost"}
            onClick={() => router.push(hrefs[tabIndex])}
          >
            더보기
          </Button>
        </TabList>
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
      </Tabs>
    </Box>
  );
};
