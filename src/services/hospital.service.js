import http from "../http-common";

class HospitalDataService {
  login(payload) {
    return http.post(`/hospital/login`, payload);
  }

  getHospitals() {
    return http.get(`/hospital/all`);
  }

  createHospital(payload) {
    return http.post(`/hospital/create`, payload);
  }
}

export default new HospitalDataService();
