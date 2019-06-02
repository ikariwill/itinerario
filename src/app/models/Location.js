const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const LocationSchema = new mongoose.Schema({
  nome: {
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
  stars: {
    type: Number
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

LocationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Location", LocationSchema);
