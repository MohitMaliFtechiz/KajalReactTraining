const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
});

userSchema.pre('save', function(){
  console.log("this", this)
  const user = this;

  if(!user.isModified("password"))
})

const User = new mongoose.model('User', userSchema);
module.exports = User;
