import http from "../http-common";

class VisitorDataService {
  findAll() {
    return http.get(`/visitor/all`);
  }

  login(payload) {
    return http.post(`/visitor/login`, payload);
  }

  setActiveStatus(id) {
    return http.put(`/visitor/set-status/${id}`);
  }
}

export default new VisitorDataService();
