import axios, { AxiosResponse } from "axios";
import { BirthdateRecommedResponse, SeasonRecommedResponse } from "./dto";

const http = axios.create({
  baseURL: "http://172.30.1.28:8080",
});

interface BaseResponse<T> {
  code: number;
  data: T;
}

export const getOremByBirthdate = (
  month: number,
  day: number,
): Promise<AxiosResponse<BaseResponse<BirthdateRecommedResponse>>> => {
  return http.get("/orem/recommend/birthday", {
    params: {
      month,
      day,
    },
  });
};

export const getOremBySeason = (season?: string): Promise<AxiosResponse<BaseResponse<SeasonRecommedResponse>>> => {
  return http.get("/orem/recommend", {
    params: {
      month: season,
    },
  });
};
