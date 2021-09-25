import http from "../http-common";

class AppointmentDataService {
  acceptAppointment(payload) {
    return http.put(
      `/appointment/accept/date=${payload.id}&visitor=${payload.visitorId}`
    );
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
