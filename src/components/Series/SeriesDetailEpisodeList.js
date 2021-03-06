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
  IconButton,
  Icon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { DetailEpisodeThumbnailSkeleton } from "../ImageSkeleton";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";
import { IoMdEye } from "react-icons/io";

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
      h={{ base: "28", md: "32" }}
      borderRadius={"md"}
      boxShadow={useColorModeValue(
        "6px 6px 12px #d5d5d5, -6px -6px 12px #ffffff",
        "6px 6px 12px #10131a, -6px -6px 12px #242d3e;"
      )}
      transition={"box-shadow 0.075s ease-in"}
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
        h={{ base: "28", md: "32" }}
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
          <NextLink href={`/episodes/${episode.id}`} passHref>
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
        {/* <Text fontSize={"small"} fontWeight={"light"}>
          <Icon as={IoMdEye} /> {episode.view_count}
        </Text> */}
        {isNew ? (
          <Badge marginLeft={2} colorScheme={"green"}>
            New
          </Badge>
        ) : null}
      </Flex>
    </LinkBox>
  );
};

const EpisodeList = ({ episodes }) => {
  return episodes.map((episode) => (
    <EpisodeListBox key={episode.id} episode={episode} />
  ));
};

const SeriesDetailEpisodeList = ({ episodes }) => {
  const [isAsc, setIsAsc] = useState(false);
  return (
    <VStack
      spacing={"5"}
      m={2}
      px={{ base: 0, md: 8 }}
      w={"full"}
      h={"full"}
      flexDir={isAsc ? "column" : "column-reverse"}
    >
      <Flex
        w={"full"}
        alignItems={"center"}
        m={2}
        pl={{ base: 2, md: 0.5 }}
        pr={2}
        order={isAsc ? "unset" : "2"}
      >
        <Divider flex={"1 1 auto"} mr={8} orientation={"horizontal"} />
        <IconButton
          icon={isAsc ? <ImSortAmountAsc /> : <ImSortAmountDesc />}
          borderRadius={"full"}
          // bgColor={useColorModeValue(null, "#1a202c")}
          // boxShadow={useColorModeValue(
          //   "4px 4px 8px #c9ced2, -4px -4px 8px #ffffff;",
          //   "4px 4px 8px #0d1016, -4px -4px 8px #273042"
          // )}
          onClick={() => {
            setIsAsc(!isAsc);
          }}
        />
      </Flex>
      {episodes && <EpisodeList episodes={episodes} />}
    </VStack>
  );
};

export default SeriesDetailEpisodeList;
