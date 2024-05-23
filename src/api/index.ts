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
      season,
    },
  });
};

export const getWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=33.4500452&lon=126.9184399&appid=dfed1ea9045e4a9448554dda6662f76d&units=metric`,
  );
};

export const registerMember = (uuid: string, nickname: string) => {
  return http.get(`/member/register`, {
    params: {
      uuid,
      nickname,
    },
  });
};

export const scrapOremList = (uuid: string) => {
  return http.get(`/orem/scraplist`, {
    params: {
      uuid,
    },
  });
};

export const saveOrem = (params: { oremId: number; uuid: string }) => {
  return http.get(`/orem/scrap`, {
    params,
  });
};
