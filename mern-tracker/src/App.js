import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import LocationList from "./components/location-list.component";
import EditLocation from "./components/edit-location.component";
import CreateLocation from "./components/create-location.component";
import CreateCar from "./components/create-car.component";
import CarList from './components/cars.list.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <Route path="/" exact component = {LocationList}/>
      <Route path="/edit/:id" exact component = {EditLocation}/>
      <Route path="/createLocation"exact  component = {CreateLocation}/>
      <Route path="/car" exact component = {CreateCar}/>
      <Route path="/cars" exact component = {CarList}/>

      </div>
    </Router> 
  );
}

export default App;
