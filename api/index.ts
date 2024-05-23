import axios from "axios";

const http = axios.create({
  baseURL: "http://172.30.1.28:8080",
});

export const getOremByBirthdate = (params: any) => {
  return http.get("/orem/recommend/birthday", {
    params,
  });
};
