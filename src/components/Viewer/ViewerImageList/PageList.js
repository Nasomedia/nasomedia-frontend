import { Container, Flex, Image, Skeleton, Box } from "@chakra-ui/react";
import React from "react";

export const ViewerPageImageList = ({ images, index }) => {
  const imageList = images
    ? images.map((image) => (
        <Flex
          key={`${image.id}`}
          minW={{ base: "full", sm: "100vw", md: "2xl" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image
            css={{
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
              pointerEvents: "none",
              margin: "0",
            }}
            h={"full"}
            objectFit={"contain"}
            flex={"0 0 auto"}
            src={image.url}
            fallback={<Skeleton w={"full"} h={"full"} />}
          />
        </Flex>
      ))
    : null;
  return (
    <Container maxW={"2xl"} h={"full"} padding={0} overflowX={"hidden"}>
      <Flex
        flexDirection={"row"}
        flexWrap={"nowrap"}
        whiteSpace={"nowrap"}
        transition={"transform 0.5s"}
        h={"full"}
        transform={{
          base: `translate3d(calc(0px - ${index} * 100vw), 0, 0);`,
          sm: `translate3d(calc(0px - ${index} * 100vw), 0, 0)`,
          md: `translate3d(calc(0px - ${index} * var(--chakra-sizes-2xl)), 0, 0)`,
        }}
      >
        {imageList}
      </Flex>
    </Container>
  );
};
