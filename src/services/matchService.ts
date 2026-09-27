import api from "../lib/axios";
import { MATCH } from "./apiUrls";

type TYPE_GET_TASK_LIST_BY_USER = {
  filter: string;
  page?: number;
  limit?: number;
};

type TYPE_MATCH_PAYLOAD = {
  playerOne: string;
  playerTwo: string;
  numberOfSets: number;
  numberOfGames: number;
  gamesWonByPlayerOne: number;
  gamesWonByPlayerTwo: number;
};

export const getMatchListByUser = (params: TYPE_GET_TASK_LIST_BY_USER) => {
  let url = `${MATCH}`;

  if (params?.filter) url = url + `?task_type=${params?.filter}`;
  if (params?.filter && params?.page) url = url + `&page=${params?.page}`;
  if (params?.filter && params?.page && params?.limit)
    url = url + `&limit=${params?.limit}`;
  return api.get(url);
};

export const addMatch = (payload: TYPE_MATCH_PAYLOAD) => {
  return api.post(`${MATCH}`, payload);
};
