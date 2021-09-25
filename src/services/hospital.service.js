import http from "../http-common";
const API_ENDPOINT = "/hospital/";
class HospitalDataService {
  addDoctor(payload, id) {
    return http.put(`${API_ENDPOINT}${id}/add-doctor`, payload);
  }

  login(payload) {
    return http.post(`${API_ENDPOINT}login`, payload);
  }

  delete(id) {
    return http.put(`${API_ENDPOINT}delete/${id}`);
  }

  getById(id) {
    return http.post(`${API_ENDPOINT}${id}`);
  }

  getHospitals() {
    return http.get(`${API_ENDPOINT}all`);
  }

  createHospital(payload) {
    return http.post(`${API_ENDPOINT}create`, payload);
  }
}

export default new HospitalDataService();
