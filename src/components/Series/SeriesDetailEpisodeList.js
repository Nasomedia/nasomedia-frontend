import { VStack, Box, Flex } from "@chakra-ui/layout";
import {
  Image,
  Text,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { DetailEpisodeThumbnailSkeleton } from "../ImageSkeleton";

const EpisodeListBox = ({ episode }) => {
  const updateAt = new Date(episode.update_at);
  return (
    <LinkBox
      as={Flex}
      bg={useColorModeValue(
        "rgba(250, 250, 250, 0.8)",
        "rgba(46, 52, 64, 0.8)"
      )}
      w={"full"}
      flexDirection={"row"}
    >
      <Image
        w={"28"}
        h={"32"}
        objectFit={"cover"}
        fallback={DetailEpisodeThumbnailSkeleton}
        borderLeftRadius={"md"}
        src={episode.thumbnail}
        alt={`thumbnail_image-${episode.title}`}
      />
      <Flex
        m={4}
        borderRightRadius={"md"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <NextLink href={`/episode/${episode.id}`} passHref>
          <LinkOverlay>{episode.title}</LinkOverlay>
        </NextLink>
        <Text
          fontSize={"small"}
          fontWeight={"light"}
          color={useColorModeValue("gray.500", "gray.200")}
        >
          {`${updateAt.getFullYear()}.${updateAt.getMonth()}.${updateAt.getDay()}`}
        </Text>
      </Flex>
    </LinkBox>
  );
};

const SeriesDetailEpisodeList = ({ episodes }) => {
  return (
    <VStack spacing={4} m={2} px={{ base: 0, md: 8 }} w={"full"}>
      <Divider my={2} />
      {episodes &&
        episodes.map((episode) => (
          <EpisodeListBox key={episode.id} episode={episode} />
        ))}
    </VStack>
  );
};

export default SeriesDetailEpisodeList;
