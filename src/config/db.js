const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error al iniciar la BD');
  }
};
module.exports = dbConnection;
