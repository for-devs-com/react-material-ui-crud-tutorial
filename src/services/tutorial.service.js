/*Create Data Service
In this step, we’re gonna create a service that uses axios object above to send HTTP requests.
services/tutorial.service.js*/

import http from "../http-common";

class TutorialDataService {
  /*We call axios get, post, put, delete method corresponding to HTTP Requests: GET, POST, PUT, DELETE to make CRUD Operations.*/
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
