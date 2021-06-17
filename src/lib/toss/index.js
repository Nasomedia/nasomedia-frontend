import { loadTossPayments } from "@tosspayments/sdk";
import {
  TOSS_CLIENT_KEY,
  TOSS_SUCCESSS_URL,
  TOSS_FAIL_URL,
} from "../../constants";

// async await을 이용할 경우
async function load() {
  return await loadTossPayments(TOSS_CLIENT_KEY);
}

async function requestPayment(type, amount, orderId, orderName, kwargs = {}) {
  tossPayments = await load();

  params = {
    amount: amount,
    orderId: orderId,
    orderName: orderName,
    successUrl: window.location.origin + TOSS_SUCCESSS_URL,
    failUrl: window.location.origin + TOSS_FAIL_URL,
    ...kwargs,
  };
  tossPayments.requestPayment(type, params);
}

export { load, requestPayment };
