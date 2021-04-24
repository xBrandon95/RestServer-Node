require('dotenv').config();

const express = require('express');
const cors = require('cors');

// create server
const app = express();

// use cors
app.use(cors());

// enable json
app.use(express.json());

// defining the port
const PORT = process.env.PORT || 3001;

// routes
app.use('/api/users', require('./routes/users'));

// runing server
app.listen(PORT, () => {
  console.log(`Server on Port ${PORT}`);
});
