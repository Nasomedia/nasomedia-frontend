import {
  Box,
  Divider,
  Flex,
  Text,
  useColorModeValue,
  Checkbox,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import NextLink from "next/link";

export const Agreements = ({ next }) => {
  //   const { children, ...flexProps } = props;
  const [checkedItems, setCheckedItems] = React.useState([false, false]);
  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  return (
    <Box>
      <Flex flexDir={"column"} justifyContent={"center"}>
        <Stack color={"gray.600"} mt={"1"} mb={"6"} spacing={"4"}>
          <Checkbox
            colorScheme={"purple"}
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) =>
              setCheckedItems([e.target.checked, e.target.checked])
            }
          >
            다음 약관에 모두 동의
          </Checkbox>
          <Divider />
          <Checkbox
            colorScheme={"purple"}
            isChecked={checkedItems[0]}
            onChange={(e) =>
              setCheckedItems([e.target.checked, checkedItems[1]])
            }
          >
            <Text display={"inline"} color={"purple.300"}>
              <Link
                colorScheme={"purple"}
                as={NextLink}
                href={"/policy/terms/service"}
              >
                서비스 이용약관
              </Link>
            </Text>
            &nbsp;동의 (필수)
          </Checkbox>
          <Checkbox
            colorScheme={"purple"}
            isChecked={checkedItems[1]}
            onChange={(e) =>
              setCheckedItems([checkedItems[0], e.target.checked])
            }
          >
            <Text display={"inline"} color={"purple.300"}>
              <Link
                colorScheme={"purple"}
                as={NextLink}
                href={"/policy/privacy"}
              >
                개인정보 수집 및 이용
              </Link>
            </Text>
            에 대한 안내 (필수)
          </Checkbox>
        </Stack>
        <Button
          isDisabled={!allChecked}
          colorScheme="purple"
          py={"1rem"}
          size="100%"
          fontSize="md"
          onClick={() => next()}
        >
          다음
        </Button>
      </Flex>
    </Box>
  );
};

// <Flex align="center" color="gray.300" {...flexProps}>
//   <Box flex="1">
//     <Divider borderColor="currentcolor" />
//   </Box>
//   <Text as="span" px="3" color={useColorModeValue('gray.600', 'gray.400')} fontWeight="medium">
//     {}
//   </Text>
//   <Box flex="1">
//     <Divider borderColor="currentcolor" />
//   </Box>
// </Flex>
