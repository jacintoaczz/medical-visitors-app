import http from "../http-common";

class AssociationDataService {
  login(payload) {
    return http.post(`/association/login`, payload);
  }
}

export default new AssociationDataService();
