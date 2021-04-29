import { API_BASE_URL } from "../../../constants";
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

export async function readSeriesesByUpdate(skip, limit) {
  try {
    const res = await fetcher(
      `${getURL()}/update?skip=${skip ? skip : 0}&limit=${limit ? limit : 20}`
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
