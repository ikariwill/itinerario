const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const LocationSchema = new Schema({
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
    type: String
  },
  horario: {
    type: String,
    require: true
  },
  imagem: {
    type: String,
    required: true
  },
  telefone: {
    type: String
  },
  link: {
    type: String
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

LocationSchema.plugin(mongoosePaginate);

module.exports = model("Location", LocationSchema);
