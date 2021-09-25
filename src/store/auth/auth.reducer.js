import { types } from "../types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.adminLogin:
      return {
       admin: {
        id: action.payload.id,
        name: action.payload.name,
       }
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
          appointmentList: action.payload.appointmentList,
        },
      };

    case types.hospitalLogin:
      return {
        hospital: {
          address: action.payload.address,
          doctorList: action.payload.doctorList,
          email: action.payload.email,
          freeDay: action.payload.freeDay,
          id: action.payload.id,
          name: action.payload.name,
        },
      };

    case types.logout:
      return {};

    default:
      return state;
  }
};
