const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is mandatory"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is necessary"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
