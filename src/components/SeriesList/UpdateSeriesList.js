import {
  Box,
  Image,
  Text,
  Container,
  Wrap,
  WrapItem,
  Skeleton,
  Stack,
  Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TabListImageSkeleton } from "../ImageSkeleton";
import { ListBoxSkeleton } from "./ListBoxSkeleton";

const ListBox = ({ imageURL, title, id }) => {
  return (
    <NextLink href={`/series/${id}`} passHref>
      <Box as={"a"} overflowY={"hidden"} width={"9rem"} height={"56"}>
        <Image
          width={"8.5rem"}
          h={"11rem"}
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

export const UpdateSeriesList = (props) => {
  const { updates } = props;
  return (
    <Wrap
      flexWrap={"wrap"}
      w={"full"}
      spacing={4}
      justify={{
        base: "center",
        md: `${updates.length > 6 ? "center" : "unset"}`,
      }}
    >
      {updates ? (
        updates.map((updateItem) => (
          <WrapItem key={`${updateItem.id}`}>
            <ListBox
              imageURL={updateItem.thumbnail}
              title={updateItem.title}
              id={`${updateItem.id}`}
            />
          </WrapItem>
        ))
      ) : (
        <>
          <ListBoxSkeleton />
          <ListBoxSkeleton />
          <ListBoxSkeleton />
          <ListBoxSkeleton />
          <ListBoxSkeleton />
          <ListBoxSkeleton />
          <ListBoxSkeleton />
        </>
      )}
    </Wrap>
  );
};
