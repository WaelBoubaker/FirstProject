const express = require('express');
const cors = require('cors');




require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const db = require("./config/dbconfig");
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))


const carRouter = require('./routes/cars.routes');
app.use('/cars',carRouter);
const LocationRouter = require('./routes/locations.routes');

app.use('/locations',LocationRouter);

const Car = require('./models/Car.model');
const Location = require('./models/Location.model');
Car.sync({ force: true })
.then(() => {
  Location.sync({ force: true }).then(() => {
  })
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

