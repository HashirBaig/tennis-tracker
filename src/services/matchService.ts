import api from "../lib/axios";
import { MATCH } from "./apiUrls";
import type { TYPE_MATCH_PAYLOAD, TYPE_PAGINATION } from "@/lib/const";

export const getMatchesListService = ({ page, limit }: TYPE_PAGINATION) => {
  return api.get(`${MATCH}?page=${page}&limit=${limit}`);
};

export const getPlayerStatService = () => {
  return api.get(`${MATCH}/stats`);
};

export const addMatchService = (payload: TYPE_MATCH_PAYLOAD) => {
  return api.post(`${MATCH}`, payload);
};
