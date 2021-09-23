import { types } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.adminLogin:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };

    case types.visitorLogin:
      return {
        visitor: {
          id: action.payload.id,
          name: action.payload.name,
          lastName: action.payload.lastName,
          email: action.payload.email,
          company: action.payload.company,
          isPaid: action.payload.isPaid,
          isActive: action.payload.isActive,
        },
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
