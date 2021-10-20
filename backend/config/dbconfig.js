const Sequelize = require('sequelize');


module.exports =  new Sequelize('OtherCars','postgres','root', {
  host: 'localhost',
  dialect: 'postgres',
 
});