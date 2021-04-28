require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dbConnection = require('./config/db');

// create server
const app = express();

// conecction db
dbConnection();

// use cors
app.use(cors());

// enable morgan
app.use(morgan('dev'));

// enable json
app.use(express.json());

// defining the port
const port = process.env.PORT;

// routes
app.use('/api/users', require('./routes/users'));

// runing server
app.listen(port, () => {
  console.log(`Server on Port ${port}`);
});
