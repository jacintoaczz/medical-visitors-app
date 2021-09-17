import http from "../http-common";

class HospitalDataService {
  login(payload) {
    return http.post(`/hospital/login`, payload);
  }
}

export default new HospitalDataService();
