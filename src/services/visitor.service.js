import http from "../http-common";
const API_ENDPOINT = "/visitor/";
class VisitorDataService {
  create(payload) {
    return http.post(`${API_ENDPOINT}create`, payload);
  }

  delete(id) {
    return http.put(`${API_ENDPOINT}delete/${id}`);
  }

  findAll() {
    return http.get(`${API_ENDPOINT}all`);
  }

  find(id) {
    return http.get(`${API_ENDPOINT}/${id}`);
  }

  login(payload) {
    return http.post(`${API_ENDPOINT}login`, payload);
  }

  setActiveStatus(id) {
    return http.put(`${API_ENDPOINT}set-status/${id}`);
  }

  setPaidStatus(id) {
    return http.put(`${API_ENDPOINT}set-paid-status/${id}`);
  }
}

export default new VisitorDataService();
