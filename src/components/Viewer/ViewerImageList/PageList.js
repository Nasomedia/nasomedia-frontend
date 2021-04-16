import { Container, Flex, Image, Skeleton } from "@chakra-ui/react";
import React from "react";

export const ViewerPageImageList = ({ images }) => {
  const imageList = images
    ? images.map((image) => (
        <Image
          css={{
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            pointerEvents: "none",
          }}
          key={`${image.id}`}
          src={image.url}
          fallback={<Skeleton w={"full"} h={"full"} />}
        />
      ))
    : null;
  return (
    <Container
      w={"2xl"}
      padding={0}
    >
      <Flex flexDirection={"column"}>{imageList}</Flex>
    </Container>
  );
};
