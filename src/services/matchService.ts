import api from "../lib/axios";
import { MATCH } from "./apiUrls";
import type { TYPE_MATCH_PAYLOAD } from "@/lib/const";

// type TYPE_GET_TASK_LIST_BY_USER = {
//   filter: string;
//   page?: number;
//   limit?: number;
// };

export const getMatchesList = () => {
  return api.get(`${MATCH}`);
};

export const addMatch = (payload: TYPE_MATCH_PAYLOAD) => {
  return api.post(`${MATCH}`, payload);
};
