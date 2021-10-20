const { Sequelize } = require("sequelize");

const db = require("../config/dbconfig");
const Location = require("./Location.model");

    const Car = db.define("car", {
      matricule: {
        type: Sequelize.STRING,
        primaryKey : true 
      },
      model: {
        type: Sequelize.STRING
      },
     
    });
    
 

    Car.hasMany(Location , {
      foriegnKey : Sequelize.STRING,
      allowNull : false 
    });
    Location.belongsTo(Car);

  module.exports = Car;