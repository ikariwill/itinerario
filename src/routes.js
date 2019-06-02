const express = require("express");
const routes = express.Router();
const handle = require("express-async-handler");

const {
  UserController,
  LocationController,
  ReviewController
} = require("./app/controllers");

// ROTA USUARIO
routes.post("/usuarios", handle(UserController.store));

routes.put("/usuarios/:id", handle(UserController.update));

routes.delete("/usuarios/:id", handle(UserController.destroy));

routes.get("/usuarios", handle(UserController.index));
routes.get("/usuarios/:id", handle(UserController.show));

// ROTA DE LOCAIS
routes.post("/locations", handle(LocationController.store));

// routes.put("/locations/:id", handle(LocationController.update));

// routes.delete("/locations/:id", handle(LocationController.destroy));

routes.get("/locations", handle(LocationController.index));
routes.get("/locations/:id", handle(LocationController.show));

// ROTA DE AVALIACOES
routes.post("/reviews", handle(ReviewController.store));

// routes.put("/reviews/:id", handle(ReviewController.update));

// routes.delete("/reviews/:id", handle(ReviewController.destroy));

routes.get("/reviews/:id", handle(ReviewController.index));

module.exports = routes;
