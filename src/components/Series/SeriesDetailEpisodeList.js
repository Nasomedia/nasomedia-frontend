import {
  VStack,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  Divider,
  Badge,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { DetailEpisodeThumbnailSkeleton } from "../ImageSkeleton";

const EpisodeListBox = ({ episode }) => {
  const updateAt = new Date(episode.update_at);
  const [isNew, setIsNew] = useState(null);
  useEffect(() => {
    const newTime = new Date().getTime() - 86400000 * 1;
    setIsNew(updateAt.getTime() > newTime ? true : false);
  }, [updateAt, isNew]);
  return (
    <LinkBox
      as={Flex}
      bg={useColorModeValue(
        "rgba(250, 250, 250, 0.8)",
        "linear-gradient(145deg, #171d28, #1c222f)"
      )}
      w={"full"}
      borderRadius={"md"}
      boxShadow={useColorModeValue(
        "6px 6px 12px #d5d5d5, -6px -6px 12px #ffffff",
        "6px 6px 12px #10131a, -6px -6px 12px #242d3e;"
      )}
      transition={"box-shadow 0.1s ease-in"}
      flexDirection={"row"}
      _hover={{
        boxShadow: useColorModeValue(
          "3px 3px 6px #d5d5d5, -3px -3px 6px #ffffff",
          "3px 3px 6px #10131a, -3px -3px 6px #242d3e;"
        ),
      }}
      _active={{
        boxShadow: useColorModeValue(
          "inset 6px 6px 12px #d5d5d5, inset -6px -6px 12px #ffffff",
          "inset 6px 6px 12px #10131a, inset -6px -6px 12px #242d3e;"
        ),
      }}
    >
      <Image
        w={"28"}
        h={"32"}
        objectFit={"cover"}
        fallback={<DetailEpisodeThumbnailSkeleton />}
        borderLeftRadius={"md"}
        src={episode.thumbnail}
        alt={`thumbnail_image-${episode.title}`}
      />
      <Flex alignItems={"center"}>
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
            {updateAt
              ? `${updateAt.getFullYear()}.${
                  updateAt.getMonth() + 1
                }.${updateAt.getDate()}`
              : "-"}
          </Text>
        </Flex>
        {isNew ? <Badge colorScheme={"green"}>New</Badge> : null}
      </Flex>
    </LinkBox>
  );
};

const SeriesDetailEpisodeList = ({ episodes }) => {
  return (
    <VStack spacing={"5"} m={2} px={{ base: 0, md: 8 }} w={"full"}>
      <Divider my={2} />
      {episodes &&
        episodes.map((episode) => (
          <EpisodeListBox key={episode.id} episode={episode} />
        ))}
    </VStack>
  );
};

export default SeriesDetailEpisodeList;
