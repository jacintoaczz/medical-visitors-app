import http from "../http-common";

class AppointmentDataService {
  getAppointments() {
    return http.get(`/appointment/all`);
  }

  createAppointment(payload) {
    return http.post(`/appointment/create`, payload);
  }
}

export default new AppointmentDataService();
