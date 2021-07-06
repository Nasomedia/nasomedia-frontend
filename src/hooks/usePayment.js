import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { read_user_me } from "../lib/api";
import { removeToken } from "../lib/setToken";
import {
  setAction,
  setUrlAction,
  setAmountAction,
  setMethodAction,
  setOrderNameAction,
} from "../slices/payment";

export default function usePayment() {
  const {
    method,
    amount,
    orderId,
    orderName,
    customerName,
    successUrl,
    failUrl,
  } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const set = useCallback((paymentData) => {
    dispatch(setAction({ ...paymentData }));
  }, []);

  const setMethod = useCallback((method) => {
    dispatch(setMethodAction({ method: method }));
  }, []);

  const setAmount = useCallback((amount) => {
    dispatch(setAmountAction({ amount: amount }));
  }, []);

  const setOrderName = useCallback((orderName) => {
    dispatch(setOrderNameAction({ orderName: orderName }));
  }, []);

  const setUrl = useCallback((urlData) => {
    dispatch(setUrlAction(urlData));
  }, []);

  return {
    method,
    amount,
    orderId,
    orderName,
    customerName,
    successUrl,
    failUrl,
    set,
    setMethod,
    setAmount,
    setOrderName,
    setUrl,
  };
}
