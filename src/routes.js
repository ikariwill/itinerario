const express = require("express");
const routes = express.Router();
const handle = require("express-async-handler");

const {
  UserController,
  LocationController,
  ReviewController,
  LikeController,
  DislikeController
} = require("./app/controllers");

// ROTA USUARIO
routes.post("/users", handle(UserController.store));

routes.put("/users/:id", handle(UserController.update));

routes.delete("/users/:id", handle(UserController.destroy));

routes.get("/users", handle(UserController.index));
routes.get("/users/:id", handle(UserController.show));

// ROTA DE LOCAIS
routes.post("/locations", handle(LocationController.store));

routes.put("/locations/:id", handle(LocationController.update));

routes.delete("/locations/:id", handle(LocationController.destroy));

routes.get("/locations", handle(LocationController.index));
routes.get("/locations/:id", handle(LocationController.show));

// ROTA DE LIKES
routes.post("/locations/:id/likes", handle(LikeController.store));

// ROTA DE DISLIKES
routes.post("/locations/:id/dislikes", handle(DislikeController.store));

// ROTA DE AVALIACOES
routes.post("/reviews", handle(ReviewController.store));

// routes.put("/reviews/:id", handle(ReviewController.update));

// routes.delete("/reviews/:id", handle(ReviewController.destroy));

routes.get("/reviews/:id", handle(ReviewController.index));

module.exports = routes;
