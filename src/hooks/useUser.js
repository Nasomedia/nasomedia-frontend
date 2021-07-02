import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { read_user_me } from "../lib/api";
import { removeToken } from "../lib/setToken";
import { loginAction, logoutAction } from "../slices/user";

export default function useUser() {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const login = useCallback((userData) => {
    dispatch(loginAction(userData));
  }, []);

  const logout = useCallback(() => {
    removeToken();
    dispatch(logoutAction());
  }, []);

  const login_has_token = useCallback(async () => {
    const userData = await read_user_me();
    login(userData);
  });

  return { isLoggedIn, user, login, login_has_token, logout };
}
