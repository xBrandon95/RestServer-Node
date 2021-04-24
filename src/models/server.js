const express = require('express');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    // Middlewares
    this.middlewares();

    // Routes the app
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hola Mundo');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on Port ${this.port}`);
    });
  }
}

module.exports = Server;
