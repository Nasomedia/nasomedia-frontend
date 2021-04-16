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
          flex={"0 0 auto"}
          maxH={"full"}
          minH={{ base: "none", md: "100vh" }}
          key={`${image.id}`}
          src={image.url}
          fallback={<Skeleton w={"full"} h={"full"} />}
        />
      ))
    : null;
  return (
    <Container maxW={{ base: "2xl", md: "3xl" }} padding={0} overflowX={"hidden"}>
      <Flex
        flexDirection={"row"}
        maxH={"100vh"}
        flexWrap={"nowrap"}
        whiteSpace={"nowrap"}
      >
        {imageList}
      </Flex>
    </Container>
  );
};
