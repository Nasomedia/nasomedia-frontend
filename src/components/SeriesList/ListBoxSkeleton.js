import { Stack, Box, Skeleton, Image, Text } from "@chakra-ui/react";
import React from "react";

export const ListBoxSkeleton = () => {
  return (
    <Stack>
      <Box width={"9rem"} height={"56"}>
        <Skeleton>
          <Image
            width={"8.5rem"}
            height={"11rem"}
            htmlWidth={"8.5rem"}
            htmlHeight={"8.5rem"}
            objectFit="cover"
            borderRadius="lg"
            alt={`thumbnail_image-loading`}
          />
        </Skeleton>
        <Skeleton>
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
            loading...
          </Text>
        </Skeleton>
      </Box>
    </Stack>
  );
};
