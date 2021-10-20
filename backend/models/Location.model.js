const { Sequelize } = require("sequelize");

const db = require("../config/dbconfig");
const Car = require("./Car.model");

    const Location = db.define("Location", {
      id_location :{
        type :Sequelize.STRING,
        primaryKey : true
      },
     
      dateDebut: {
        type: Sequelize.DATE
      },
      dateFin: {
        type: Sequelize.DATE
      },
     
     
    });

   
    
  module.exports = Location;
