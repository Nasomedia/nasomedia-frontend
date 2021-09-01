import { API_BASE_URL } from "../../constants";
import fetcher from "../fetch";

const getURL = () => `${API_BASE_URL}/series`;

export async function readSeries(id) {
  try {
    const res = await fetcher(`${getURL()}/${id}`);
    if (typeof res.id === "number") {
      return res;
    }
    return null;
  } catch (e) {
    throw e;
  }
}

export async function readSeriesMultiple(
  skip,
  limit,
  sortBy,
  orderBy,
  title,
  isComplete,
  keyword
) {
  try {
    const res = await fetcher(
      `${getURL()}/?skip=${skip ? skip : 0}&limit=${limit ? limit : 20}` +
        `${sortBy ? "&sort_by=" + sortBy : ""}` +
        `${orderBy ? "&order_by=" + orderBy : ""}` +
        `${title ? "&title=" + title : ""}` +
        `${isComplete ? "&is_complete=" + isComplete : ""}` +
        `${keyword ? "&keyword=" + keyword : ""}`
    );
    if (Array.isArray(res)) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    throw e;
  }
}

export async function readEpisodesBySeries(id) {
  try {
    const res = await fetcher(`${getURL()}/${id}/episodes`);
    if (Array.isArray(res)) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    throw e;
  }
}
