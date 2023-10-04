const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
  },
});



// static method to get all users
userSchema.statics.getAllUsers = async function () {
  try {
    const users = await this.find({});
    return users;
  } catch (error) {
    throw Error("Error fetching users");
  }
};



// static signup method
userSchema.statics.signup = async function (username, email, password, phoneNumber) {
  // validation
  if (!username || !email || !password || !phoneNumber) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email format");
  }

  const exists = await this.findOne({ $or: [{ email }, { username }, { phoneNumber }] });

  if (exists) {
    throw Error("Email, username, or phone number already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash, phoneNumber });

  return user;
};



// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
