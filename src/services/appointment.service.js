import http from "../http-common";

class AppointmentDataService {
  acceptAppointment(id) {
    return http.put(`/appointment/accept/${id}`);
  }

  getAppointments() {
    return http.get(`/appointment/all`);
  }

  createAppointment(payload) {
    return http.post(`/appointment/create`, payload);
  }

  rejectAppointment(id) {
    return http.put(`/appointment/reject/${id}`);
  }
}

export default new AppointmentDataService();
