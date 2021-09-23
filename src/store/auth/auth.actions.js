import { types } from "../types";

export const visitorLogin = (payload) => {
  return {
    type: types.visitorLogin,
    payload,
  };
};
