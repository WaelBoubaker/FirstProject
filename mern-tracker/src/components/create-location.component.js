import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DataLocationService from '../services/location.service'

export default class CreateLocation extends Component{
 
    constructor(props){
        super(props);
        this.onChangeMatricule = this.onChangeMatricule.bind(this);
        this.onChangeIdLocation=this.onChangeIdLocation.bind(this);
        this.onChangeDatedebut=this.onChangeDatedebut.bind(this);
        this.onChangeDateFin = this.onChangeDateFin.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
           
            id_location :'',
            dateDebut : new Date(),
            dateFin : new Date(),
            carMatricule:'',
            cars : []
        }
    }

    

    componentDidMount(){
      axios.get('http://localhost:5000/cars/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            cars: response.data.map(car => car.matricule),
            matricule: response.data[0].matricule
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

    }

    

    onChangeIdLocation (e){
        this.setState({
            id_location : e.target.value
        });
    }
  

    onChangeDatedebut (date){
        this.setState({
            dateDebut :date
        });
    }

    onChangeDateFin (date){
        this.setState({
            dateFin : date
        });
    }
    onChangeMatricule(e) {
      this.setState({
        carMatricule: e.target.value
      })
    }

  
    onSubmit(e) {
      e.preventDefault();
      var data = {
        
        id_location: this.state.id_location,
        dateDebut: this.state.dateDebut,
        dateFin: this.state.dateFin,
        carMatricule: this.state.carMatricule
      }
  
      console.log(data);
  
      DataLocationService.create(data)
      .then(response => {
        this.setState({
          id_location: response.data.id_location,
          dateDebut:response.data.dateDebut,
          dateFin : response.data.dateFin,
          carMatricule : response.data.carMatricule
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      window.location='/'
    }
    
    render (){
        return (
            <div>
            <h3>Create New Location Log</h3>
            <form onSubmit={this.onSubmit}>
              
             
            <div className="form-group">
              <label htmlFor="id">id_location</label>
              <input
                type="text"
                className="form-control"
                id="id_location"
                required
                value={this.state.id_location}
                onChange={this.onChangeIdLocation}
                name="id_location"
              />
            </div>
              <div className="form-group">
                <label>Date Debut: </label>
                <div>
                  <DatePicker
                    selected={this.state.dateDebut}
                    onChange={this.onChangeDatedebut}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Date Fin: </label>
                <div>
                  <DatePicker
                    selected={this.state.dateFin}
                    onChange={this.onChangeDateFin}
                  />
                </div>
              </div>
              <div className="form-group">
              <label>Cars :  </label> <br></br>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.carMatricule}
              onChange={this.onChangeMatricule}>
              {
                this.state.cars.map(function(car) {
                  return <option 
                    key={car}
                    value={car}>{car}
                    </option>;
                })
              }
          </select>
            </div>
            <br></br>
              <div className="form-group">
                <input type="submit" value="Add new Location" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
    }
}