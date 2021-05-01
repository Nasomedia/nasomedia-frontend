import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  return { isLoggedIn, user, login, logout };
}
