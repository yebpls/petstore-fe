import axios from "axios";
import axiosClient from "./axiosClient";
import { API_URL } from "./constant";

export const petApi = {
  getAll() {
    const url = "/api/pet/findAll";
    return axiosClient.get(url);
  },

  getAllBySpeciesId(id) {
    const url = `/api/pet/findAllBySpecies?speciesId=${id}`;
    return axiosClient.get(url);
  },

  addPet(form) {
    const url = "/api/pet/add";
    return axios.post(API_URL + url, form);
  },
};
