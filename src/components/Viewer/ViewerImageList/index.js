const example_data =
  "https://imges-ext-1.discordapp.net/external/lN6Rx6VmOoo2cTlW3r2UiqHjghKf7uRGH15LucjfrDA/https/blog-imgs-135.fc2.com/n/a/s/nasonasofc123456/1_20210128010214540.jpg?width=493&height=701";

import { Container, Flex, Image } from "@chakra-ui/react";
import React from "react";

const ViewerImageList = ({ images }) => {
  console.log(images);
  const imageList = images
    ? images.map((image) => (
        <Image key={`${image.id}`} src={image.url} fallbackSrc="/noimage.png" />
      ))
    : null;
  return (
    <Container
      css={{
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
      maxW={"2xl"}
      padding={0}
    >
      <Flex flexDirection={"column"}>{imageList}</Flex>
    </Container>
  );
};

export default ViewerImageList;
