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
import { create_user_open, get_access_token } from "../../lib/api";
import { setToken } from "../../lib/setToken";

export const SignupForm = (props) => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [confirmPw, setConfirmPw] = React.useState("");
  const [error, setError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const toast = useToast();
  const router = useRouter();

  const onName = (e) => {
    setName(e.target.value);
  };

  const onId = (e) => {
    setId(e.target.value);
  };

  const onPw = (e) => {
    setPw(e.target.value);
    if (error) setError(false);
  };

  const onCofirmPw = (e) => {
    setConfirmPw(e.target.value);
    if (error) setError(false);
  };
  return (
    <chakra.form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          setError(false);
          if (pw !== confirmPw)
            throw new Error("비밀번호가 일치하지 않습니다.");
          const user = await create_user_open(pw, id, name);
          toast({
            title: "나소미디어에 가입하신 것을 환영합니다.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          const access_token = await get_access_token(id, pw);
          if (access_token) {
            setToken(access_token);
            router.push("/");
          }
        } catch (e) {
          let message = null;
          if (e.message === "Incorrect email or password") {
            message = "이메일 혹은 비밀번호가 올바르지 않습니다.";
            setError(true);
          }
          toast({
            title: "회원가입에 실패하셨습니다.",
            description: message ? message : e.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setIsSubmitting(false);
        }
        setIsSubmitting(false);
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl isRequired id="name">
          <FormLabel>이름(혹은 닉네임)</FormLabel>
          <Input
            name="name"
            type="name"
            autoComplete="name"
            onChange={onName}
            required
          />
        </FormControl>
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
        <PasswordField isSignup={true} onChange={onPw} isInvalid={error} />
        <PasswordField
          isConfirm={true}
          onChange={onCofirmPw}
          isInvalid={error}
        />
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="purple"
          size="lg"
          fontSize="md"
        >
          회원가입
        </Button>
      </Stack>
    </chakra.form>
  );
};
