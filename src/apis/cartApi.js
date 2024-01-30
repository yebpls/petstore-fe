import axios from "axios";
import { API_URL } from "./constant";

export const cartApi = {
  findCartIdById(id) {
    const url = `/api/cart/findById?id=${id}`;
    return axios.get(API_URL + url);
  },
  findAllByCartId(id) {
    const url = `/api/cartItem/findAllByCart?cartId=${id}`;
    return axios.get(API_URL + url);
  },
};
