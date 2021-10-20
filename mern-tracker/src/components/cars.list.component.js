import React ,{Component} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

const Car = props => {
    <tr>
        <td>{props.car.matricule}</td>
        <td>{props.car.model}</td>
        
    </tr>
}

export default class CarList extends Component {
    constructor(props) {
        super(props) ;
         this.deleteCar = this.deleteCar.bind(this) 
         this.state ={
             cars : []
         };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/cars/')
        .then(response => {
            this.setState({ cars: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    deleteCar(matricule) {
        axios.delete('http://localhost:5000/cars/'+matricule)
          .then(response => { console.log(response.data)});
    
        this.setState({
          cars: this.state.cars.filter(el => el.matricule=== matricule)
        })
      }
    
      CarList() {
        return this.state.cars.map(currentcar => {
          return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar.matricule}/>;
        })
      }

      render() {
        return (
          <div>
            <h3>Cars</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>matricule</th>
                  <th>model</th>
                </tr>
              </thead>
              <tbody>
                {this.CarList()}
              </tbody>
            </table>
          </div>
        )
      }
}