    const Car = require('../models/Car.model');
    var router = require("express").Router();
    const db = require('../config/dbconfig');
    const Sequelize = require('sequelize');
  
    // Create a new car
    router.post("/add", (req,res)=>{
     let {matricule,model}=req.body ;   
    Car.create({
      matricule,
      model 
    }).then(() => res.json('Car Aded succsefully '))
    .catch(err => res.status(400).json('error'+err))
  });

  //findAll 
  router.get('/' , (req,res)=>{
    Car.findAll()
    .then((cars)=>res.json(cars))
    .catch((err)=>res.status(400).json('error')+err)
  });

  //findById
router.get ('/:id',(req,res)=>{
  Car.findByPk(req.params.id)
  .then((car)=> {
    if(!car){
      res.status(404).json({message : 'car not found'});
    }
    res.status(200).json(car) ;
    
  })
  .catch((err)=>{res.status(400).json(err)})
});
  //findbyModel
  router.get('',(req,res)=>{
    const model = req.params.model ; 
    var condition = model ? { model: { [Op.like]: `%${model}%` } } : null;
      Car.findAll({where : condition})
    .then((car)=>{
      if(!car){
        res.status(404).json({message:'car not found'});
      }
      res.status(200).json(car);
    })
    .catch((err)=>res.status(400).json(err))
  });


  //update
  router.put('/update/:id',(req,res)=>{
    Car.findByPk(req.params.id)
    .then((car)=>{
      if(!car){
        res.status(404).json({message : 'car not found'});
      }
      car.update({
        ...car ,
        ...req.body
      })
      .then((updatedCar)=>{
        res.status(200).json(updatedCar)
      })
  
      .catch((err)=>{res.status(400).json(err)});
    })
    .catch((err)=>res.status(400).json(err))
  
    
  });

  //delete
  router.delete('/delete/:mat',(req,res)=>{
    Car.findAll(req.params.mat)
    .then((car)=>{
      if(!car){
        res.status(404).json({message : 'car not found'});;
      }
      car.destroy()
      .then((car)=>{
        res.status(200).json(car)
      })
      .catch((err)=>{res.status(400).json(err)})
    })
    .catch((err)=>{res.status(400).json(err)})
  });
  
  

  module.exports = router ;

