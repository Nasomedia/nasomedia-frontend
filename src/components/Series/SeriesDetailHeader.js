import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
      <Image
        src={series.thumbnail}
        fallback={<SeriesDetailThumbnailSkeleton />}
        width={"full"}
        height={"auto"}
        objectFit="cover"
        alt={`thumbnail_image-${series.title}`}
      />
      <Heading mt={4}>{series.title}</Heading>
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
