import { Stack } from "@chakra-ui/react";
import DesktopNavButton from "./DesktopNavButton";

export const DesktopNavLeft = (props) => {
  return (
    <Stack direction={"row"} spacing={4} {...props}>
      <DesktopNavButton href={"/finder"}>상세검색</DesktopNavButton>
      <DesktopNavButton href={"/update"}>업데이트</DesktopNavButton>
      <DesktopNavButton href={"/rank"}>랭킹</DesktopNavButton>
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
