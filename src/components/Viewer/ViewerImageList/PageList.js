import { Container, Flex, Image, Skeleton, Box } from "@chakra-ui/react";
import React from "react";

export const ViewerPageImageList = ({ images, index }) => {
  const imageList = images
    ? images.map((image) => (
        <Box
          key={`${image.id}`}
          minW={{ base: "full", sm: "100vw", md: "2xl" }}
        >
          <Image
            css={{
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none",
              pointerEvents: "none",
              margin: "0 auto",
            }}
            h={"100vh"}
            objectFit={"contain"}
            flex={"0 0 auto"}
            src={image.url}
            fallback={<Skeleton w={"full"} h={"full"} />}
          />
        </Box>
      ))
    : null;
  return (
    <Container maxW={"2xl"} padding={0} overflowX={"hidden"}>
      <Flex
        flexDirection={"row"}
        flexWrap={"nowrap"}
        whiteSpace={"nowrap"}
        transition={"transform 0.5s"}
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
