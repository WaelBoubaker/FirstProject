import http from '../http-common';

class DataCarService {
    getAll() {
        return http.get("/cars");
      }
    
      get(matricule) {
        return http.get(`/cars/${matricule}`);
      }
    
      create(data) {
        return http.post("cars/add/", data);
      }
    
      update(matricule, data) {
        return http.put(`/cars/${matricule}`, data);
      }
    
      delete(matricule) {
        return http.delete(`/cars/${matricule}`);
      }
    
      deleteAll() {
        return http.delete(`/cars`);
      }
    
      findByTitle(model) {
        return http.get(`/cars?model=${model}`);
      }
    }
    
    export default new DataCarService();

