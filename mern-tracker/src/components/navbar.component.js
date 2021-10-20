import React  from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">OtherCars</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Locations</Link>
          </li>
          <li className="navbar-item">
          <Link to="/createLocation" className="nav-link">Create Location</Link>
          </li>
          <li className="navbar-item">
          <Link to="/car" className="nav-link">Create Car</Link>
          </li>
          <li className="navbar-item">
          <Link to="/cars" className="nav-link">Car List</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
  }
