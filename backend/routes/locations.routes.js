const router = require('express').Router();

const Car = require('../models/Car.model');
let Location = require('../models/Location.model');


//findAll
router.get('/' , (req,res)=>{
  Location.findAll({
    include : [{
      model : Car,
      as : 'car'
    }]
  })
  .then((locations)=>res.json(locations))
  .catch((err)=>res.status(400).json('error' + err))
});

//update
router.put('/update/:id',(req,res)=>{
  Location.findByPk(req.params.id)
  .then((location)=>{
    if(!location){
      res.status(404).json({message : 'location not found'});
    }
    location.update({
      ...location ,
      ...req.body
    })
    .then((updatedLoc)=>{
      res.status(200).json(updatedLoc)
    })

    .catch((err)=>{res.status(400).json(err)});
  })
  .catch((err)=>res.status(400).json(err))

  
});

//delete 
router.delete('/delete/:id',(req,res)=>{
  Location.findByPk(req.params.id)
  .then((location)=>{
    if(!location){
      res.status(404).json({message : 'location not found'});;
    }
    location.destroy()
    .then((location)=>{
      res.status(200).json(location)
    })
    .catch((err)=>{res.status(400).json(err)})
  })
  .catch((err)=>{res.status(400).json(err)})
});

//create 

router.post('/add',(req,res)=>{
  let { id_location,dateDebut,dateFin}=req.body ; 
  Location.create({
    id_location,
    dateDebut,
    dateFin ,
    carMatricule : req.body.carMatricule

  })
  .then((location)=>{res.status(200).json(location + '' + 'added !')})
  .catch((err)=>{res.status(400).json(err)
  });
}) ;

//findById
router.get ('/:id',(req,res)=>{
  Location.findByPk(req.params.id , {
    include : [{
      model : Car,
      as :'car'
    }]
  })
  .then((location)=> {
    if(!location){
      res.status(404).json({message : 'Location not found'});
    }
    res.status(200).json(location) ;
    
  })
  .catch((err)=>{res.status(400).json(err)})
});

//findByMatricule 

router.get('',(req,res)=>{
  const mat = req.params.mat ; 
  var condition = mat ? { mat: { [Op.like]: `%${mat}%` } } : null;
    Location.findAll({where : condition})
  .then((location)=>{
    if(!location){
      res.status(404).json({message:'location not found'});
    }
    res.status(200).json(location);
  })
  .catch((err)=>res.status(400).json(err))
});




 

module.exports = router ; 