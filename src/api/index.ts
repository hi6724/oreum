import axios, { AxiosResponse } from "axios";
import { BirthdateRecommedResponse, SeasonRecommedResponse } from "./dto";

const http = axios.create({
  baseURL: "https://k417ce4df2d7da.user-app.krampoline.com/api",
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
