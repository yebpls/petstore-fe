import axios from "axios";
import { API_URL } from "./constant";

export const speciesApi = {
  getAllSpecies() {
    const url = "/api/species";
    return axios.get(API_URL + url);
  },
};
