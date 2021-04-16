import { Container, Flex, Image, Skeleton } from "@chakra-ui/react";
import React from "react";

export const ViewerScrollImageList = ({ images }) => {
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
          fallback={<Skeleton w={"full"} h={"70vh"} />}
        />
      ))
    : null;
  return (
    <Container w={"2xl"} padding={0} py={4} px={0} marginY={10}>
      <Flex flexDirection={"column"}>{imageList}</Flex>
    </Container>
  );
};
