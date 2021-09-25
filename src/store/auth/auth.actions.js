import { types } from "../types";

export const visitorLogin = (payload) => {
  return {
    type: types.visitorLogin,
    payload,
  };
};

export const hospitalLogin = (payload) => {
  return {
    type: types.hospitalLogin,
    payload,
  };
};

export const adminLogin = (payload) => {
  return {
    type: types.adminLogin,
    payload,
  };
};

export const logout = () => {
  return {
    type: types.logout,
  };
};
