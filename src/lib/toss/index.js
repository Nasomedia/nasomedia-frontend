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

async function requestPayment(type, amount, orderId, orderName) {
  try {
    const tossPayments = await load();

    await tossPayments.requestPayment(`${type}`, {
      amount: amount,
      orderName: orderName,
      successUrl: window.location.origin + TOSS_SUCCESSS_URL,
      failUrl: window.location.origin + TOSS_FAIL_URL,
      orderId: orderId,
    });
  } catch (e) {
    throw e;
  }
}

export { load, requestPayment };
