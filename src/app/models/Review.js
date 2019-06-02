const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ReviewSchema = new mongoose.Schema({
  stars: {
    type: Number,
    require: true,
    default: 0
  },
  comment: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ReviewSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Review", ReviewSchema);
