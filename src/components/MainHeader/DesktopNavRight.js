import {
  Stack,
  Box,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const DesktopNavRight = (props) => {
  return (
    <Stack direction={"row"} spacing={4} {...props}>
      <Box>
        <NextLink href={"/test"}>
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
            {`테스트`}
          </Link>
        </NextLink>
      </Box>
      <Box>
        <NextLink href={""}>
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
            {`테스트2`}
          </Link>
        </NextLink>
      </Box>
    </Stack>
  );
};

/*
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NextLink href={href} passHref={true}>
      <Link
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'green.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'green.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};
*/
