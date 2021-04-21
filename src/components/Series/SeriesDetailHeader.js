import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SeriesDetailThumbnailSkeleton } from "../ImageSkeleton";

const SeriesDetailHeader = ({ series }) => {
  return (
    <Box
      width={{ base: "full", sm: "sm" }}
      minW={{ base: "full", sm: "xs" }}
      p={2}
    >
      <Box
        role={"group"}
        mb={"4"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          pos={"relative"}
          width={"full"}
          height={"auto"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${series.thumbnail})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _hover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            width={"full"}
            height={"auto"}
            objectFit={"cover"}
            fallback={<SeriesDetailThumbnailSkeleton />}
            alt={`thumbnail_image-${series.title}`}
            src={series.thumbnail}
          />
        </Box>
      </Box>
      <Heading zIndex={10} mt={6}>{series.title}</Heading>
      <Box as="span" color="gray.400" fontSize="sm">
        장르: - | -세 이용가 | 작가: -
      </Box>
      <Accordion mt={4} allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                작품설명
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={2}>{series.description}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SeriesDetailHeader;
