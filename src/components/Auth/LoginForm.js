import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  useToast,
  Input,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { PasswordField } from "./PasswordField";
import useUser from "../../hooks/useUser";
import { get_access_token } from "../../lib/api";
import { setToken } from "../../lib/setToken";

export const LoginForm = (props) => {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const toast = useToast();
  const router = useRouter();

  const { login_has_token } = useUser();

  const onId = (e) => {
    setId(e.target.value);
  };

  const onPw = (e) => {
    setPw(e.target.value);
    if (error) setError(false);
  };
  return (
    <chakra.form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          setError(false);
          const access_token = await get_access_token(id, pw);
          toast({
            title: "로그인에 성공하였습니다.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          if (access_token) {
            setToken(access_token);
            login_has_token();
            router.push("/");
            //   history.back();
          }
        } catch (e) {
          let message = null;
          if (e.message === "Incorrect email or password") {
            message = "이메일 혹은 비밀번호가 올바르지 않습니다.";
            setError(true);
          }
          toast({
            title: "로그인에 실패하셨습니다.",
            description: message ? message : e.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl isRequired id="email">
          <FormLabel>이메일</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            onChange={onId}
            required
          />
        </FormControl>
        <PasswordField onChange={onPw} isInvalid={error} />
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="purple"
          size="lg"
          fontSize="md"
        >
          로그인
        </Button>
      </Stack>
    </chakra.form>
  );
};
