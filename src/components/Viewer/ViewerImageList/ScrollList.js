import { Container, Flex, Image, Skeleton } from "@chakra-ui/react";
import React from "react";

export const ViewerScrollImageList = (props) => {
  const { images } = props;
  const imageList = images
    ? images.map((image) => (
        <Image
          maxW={"100vw"}
          css={{
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
            pointerEvents: "none",
          }}
          key={`${image.id}`}
          src={image.url}
          fallback={<Skeleton w={"full"} h={"70%"} />}
        />
      ))
    : null;
  return (
    <Container
      maxW={"2xl"}
      padding={0}
      //  py={4}
      // px={0}
      //  marginY={10}
      {...props}
    >
      <Flex flexDirection={"column"}>{imageList}</Flex>
    </Container>
  );
};
