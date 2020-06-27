import express from "express";
import routes from "../api/routes/routes";
import database from "../api/config/database";
import dotenv from 'dotenv';
import cors from 'cors';
import multipart from "connect-multiparty";



class App {
  constructor() {
    this.server = express();
    dotenv.config();
    this.middlewares();
    this.routes();
    this.database();

  }

  database() {
    database.conectar();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(multipart({ uploadDir: 'src/api/uploads'}));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
