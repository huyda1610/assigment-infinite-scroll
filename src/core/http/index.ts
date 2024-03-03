import axios, { AxiosError } from "axios";
import qs from "qs";
import { BASE_URL } from "../constant";

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 60 * 1000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "vi",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const _response = error.response?.data || { code: 500 };
    return Promise.reject(_response);
  },
);

export default http;
