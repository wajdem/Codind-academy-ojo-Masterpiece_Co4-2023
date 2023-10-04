const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// Get all the users
const getAllUser = async (req, res) => {
  try {
    const loggedInUsers = await User.find({ lastLoginDate: { $exists: true } });

    res.status(200).json(loggedInUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete users
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  try {
    const user = await User.signup(username, email, password, phoneNumber);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ username, email, phoneNumber, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = { signupUser, loginUser, getAllUser, deleteUser}