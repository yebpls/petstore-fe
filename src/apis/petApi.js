import axiosClient from "./axiosClient";

export const petApi = {
  getAll() {
    const url = "/api/pet/findAll";
    return axiosClient.get(url);
  },
};
