import { API_BASE_URL } from "../../constants";
import fetcher from "../fetch";

const getURL = (id) => `${API_BASE_URL}/episodes/${id}`;

export async function readEpisode(id) {
  try {
    const res = await fetcher(`${getURL(id)}`);
    if (typeof res.id === "number") {
      return res;
    }
    return null;
  } catch (e) {
    throw e;
  }
}

export async function readPrevEpisode(id) {
  try {
    const res = await fetcher(`${getURL(id)}/prev`);
    if (typeof res.id === "number") {
      return res;
    }
    return null;
  } catch (e) {
    throw e;
  }
}

export async function readNextEpisode(id) {
  try {
    const res = await fetcher(`${getURL(id)}/next`);
    if (typeof res.id === "number") {
      return res;
    }
    return null;
  } catch (e) {
    throw e;
  }
}

export async function readEpisodeImages(id) {
  try {
    const res = await fetcher(`${getURL(id)}/images`);
    if (Array.isArray(res)) {
      return res;
    } else {
      return [];
    }
  } catch (e) {
    throw e;
  }
}
