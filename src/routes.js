const express = require("express");
const routes = express.Router();
const handle = require("express-async-handler");

const { UserController } = require("./app/controllers");

routes.post("/usuarios", handle(UserController.store));

routes.get("/usuarios", handle(UserController.show));

routes.put("/usuarios/:id", handle(UserController.update));

routes.delete("/usuarios/:id", handle(UserController.destroy));

module.exports = routes;
