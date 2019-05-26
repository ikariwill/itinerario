const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    hide: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(mongooseHidden);

UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(password) {
    return bcrypt.compare(password, this.password);
  }
};

UserSchema.statics = {
  generateToken({ id }) {
    return jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.ttl
    });
  }
};

module.exports = mongoose.model("User", UserSchema);
