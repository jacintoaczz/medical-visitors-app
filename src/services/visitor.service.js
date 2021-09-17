import http from "../http-common";

class VisitorDataService {
  login(payload) {
    return http.post(`/visitor/login`, payload);
  }
}

export default new VisitorDataService();
