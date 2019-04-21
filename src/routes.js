const express = require("express");
const routes = express.Router();
const handle = require("express-async-handler");

const UserController = require("./controllers/UserController");

routes.post("/usuarios", handle(UserController.store));

routes.get("/usuarios", handle(UserController.show));

routes.delete("/usuarios/:id", handle(UserController.destroy));

module.exports = routes;
