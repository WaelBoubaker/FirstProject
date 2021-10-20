import React, { Component } from "react";
import DataCarService from "../services/car.service";
import axios from 'axios';

export default class AddCar extends Component {
  constructor(props) {
    super(props);
    this.onChangeMatricule = this.onChangeMatricule.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.saveCar = this.saveCar.bind(this);
    this.newCar = this.newCar.bind(this);

    this.state = {
      matricule: "",
      model: "",
      
      submitted: false
    };
  }
  componentDidMount(){
      axios.get('http://localhost:5000/cars/')
      .then(res=>{
          if(res.data.length > 0 ){
           
              

              }
          }
      )
  }

  onChangeModel(e) {
    this.setState({
      model: e.target.value
    });
  }

  onChangeMatricule(e) {
    this.setState({
      matricule: e.target.value
    });
  }

  saveCar(e) {
      e.preventDefault();
    var data = {
      matricule: this.state.matricule,
      model: this.state.model
    };

    DataCarService.create(data)
      .then(response => {
        this.setState({
          matricule: response.data.matricule,
          model: response.data.model,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newCar() {
    this.setState({
      
      matricule: "",
      model: "",

      submitted: false
    });
  }
  
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCar}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="matricule">Matricule</label>
              <input
                type="text"
                className="form-control"
                id="matricule"
                required
                value={this.state.matricule}
                onChange={this.onChangeMatricule}
                name="matricule"
              />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                id="model"
                required
                value={this.state.model}
                onChange={this.onChangeModel}
                name="model"
              />
            </div>

            <button onClick={this.saveCar} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        
      </div>
    );
  }
}