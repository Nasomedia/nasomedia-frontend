import client from "../client";

export const createPaymentOrder = async (
  deposit_amount,
  cash_id,
  request_at = new Date()
) => {
  const url = `/payments/order`;
  const data = {
    deposit_amount: deposit_amount,
    cash_id: cash_id,
    request_at: request_at.toJSON(),
  };
  try {
    const res = await client.post(url, data);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const requestAckPayment = async (payment_key, order_id, amount) => {
  const url = `/payments/ack?payment_key=${payment_key}&order_id=${order_id}&amount=${amount}`;
  try {
    const res = await client.post(url);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const cancelPayment = async (payment_key, cancel_reason) => {
  const url = `/payments/cancel?payment_key=${payment_key}`;
  const data = {
    cancel_reason,
  };
  try {
    const res = await client.post(url, data);
    return res.data;
  } catch (e) {
    return null;
  }
};
