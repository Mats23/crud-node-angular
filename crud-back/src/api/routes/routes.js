import { Router } from "express";
import produtoController from "../controller/produtoController";
import authController from "../controller/authController";
import Auth from "../config/auth";

const routes = new Router();

routes.post("/cadastrar",authController.cadastro);
routes.post("/login",authController.login);
//routes.use(Auth.verify);
routes.post("/produto", produtoController.file);
routes.get("/produto/:limit/:skip", produtoController.index);
routes.delete("/produto/:id", produtoController.delete);

export default routes;
