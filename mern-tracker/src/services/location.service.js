import http from '../http-common';

class DataLocationService {
    getAll() {
        return http.get("/locations");
      }
    
      get(id_location) {
        return http.get(`/locations/${id_location}`);
      }
    
      create(data) {
        return http.post("locations/add/", data);
      }
    
      update(id_location, data) {
        return http.put(`/cars/${id_location}`, data);
      }
    
      delete(id_location) {
        return http.delete(`/cars/${id_location}`);
      }
    
      deleteAll() {
        return http.delete(`/locations`);
      }
    
      findByMatricule(matricule) {
        return http.get(`/locations?model=${matricule}`);
      }
    }
    
    export default new DataLocationService();

