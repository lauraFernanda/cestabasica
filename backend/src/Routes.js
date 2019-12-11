const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");

const SessionController = require("./controllers/SessionController");

const authMinddleWare = require("./middlewares/auth");



routes.post("/sessions", SessionController.store);
routes.post("/Us", UserController.store);

routes.get("/Us", UserController.list);
routes.get("/UsId/:id", UserController.index);
routes.put("/UsId/:id", UserController.update);
routes.delete("/UsId/:id", UserController.destroy);
routes.use(authMinddleWare);

module.exports = routes;
