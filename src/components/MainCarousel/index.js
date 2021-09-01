import { Container, LinkBox, LinkOverlay, Flex, Image } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const CarouselBox = ({ href, image }) => {
  return (
    <LinkBox width={"7xl"} flexShrink={"0"}>
      <NextLink href={href} passHref>
        <LinkOverlay>
          <Image src={image}></Image>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export const MainCarousel = () => {
  const example_list = [
    { href: "/series/3", image: "/noimage.png" },
    { href: "/series/3", image: "/noimage.png" },
    { href: "/series/3", image: "/noimage.png" },
  ];
  return (
    <Container
      maxW={"7xl"}
      sx={{
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <Flex overflow={"hidden"} position={"relative"}>
        {example_list.map((example) => (
          <CarouselBox href={example.href} image={example.image} />
        ))}
      </Flex>
    </Container>
  );
};
