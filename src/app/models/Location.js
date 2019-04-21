const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  logradouro: {
    type: String,
    required: true
  },
  numero: {
    type: String,
    require: true
  },
  bairro: {
    type: String,
    require: true
  },
  cidade: {
    type: String,
    require: true
  },
  estado: {
    type: String,
    require: true
  },
  cep: {
    type: String,
    require: true
  },
  telefone: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Location", LocationSchema);
