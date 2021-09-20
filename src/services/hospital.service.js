import http from "../http-common";

class HospitalDataService {
  login(payload) {
    return http.post(`/hospital/login`, payload);
  }

  createHospital(payload) {
    return http.post(`/hospital/create`, payload);
  }
}

export default new HospitalDataService();
