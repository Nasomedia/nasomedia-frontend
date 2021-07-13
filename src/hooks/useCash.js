import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readMyCash } from "../lib/api";
import { setAction } from "../slices/cash";

export default function useCash() {
  const { amount, id, user_id, deposit, usage } = useSelector(
    (state) => state.cash
  );
  const dispatch = useDispatch();

  const set = useCallback((cashData) => {
    dispatch(setAction(cashData));
  }, []);

  const set_has_token = useCallback(async () => {
    const cashData = await readMyCash();
    set(cashData);
  });

  return { amount, id, user_id, deposit, usage, set, set_has_token };
}
