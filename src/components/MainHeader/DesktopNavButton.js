import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const DesktopNavButton = ({ href, children }) => {
  return (
    <Box>
      <NextLink href={href}>
        <Link
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color={useColorModeValue("gray.600", "gray.200")}
          _hover={{
            textDecoration: "none",
            color: useColorModeValue("gray.800", "white"),
          }}
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export default DesktopNavButton;
