import axios from "axios";
import axiosClient from "./axiosClient";
import { API_URL } from "./constant";

export const accountApi = {
  login(params) {
    const url = "/login/signin";
    return axios.post(API_URL + url, params);
  },
};
