import http from "../http-common";
const API_ENDPOINT = "/appointment/";

class AppointmentDataService {
  acceptAppointment(payload) {
    return http.put(`${API_ENDPOINT}accept/${payload.id}/${payload.visitorId}`);
  }

  getAppointments() {
    return http.get(`${API_ENDPOINT}all`);
  }

  createAppointment(payload) {
    return http.post(`${API_ENDPOINT}create`, payload);
  }

  rejectAppointment(id) {
    return http.put(`${API_ENDPOINT}reject/${id}`);
  }
}

export default new AppointmentDataService();
