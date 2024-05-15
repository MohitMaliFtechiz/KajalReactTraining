const User = require("../models/user_model");

//registration
exports.signup = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

    const userExit = await User.findOne({ email:email });
    if (userExit) {
      return res.status(400).json({ msg: "Email already exits" });
    }
    await User.create({ username, email, password, isAdmin });
    // Create the new user
    const newUser = await User.create({ username, email, password, isAdmin });

    // You can return the newly created user data if needed
    res
      .status(200)
      .json({ msg: "User registered successfully", data: newUser });

  } catch (error) {
    console.log("error", error)
    res.status(500).json({ msg: "Internal server error" });
  }
};
//login
exports.login = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ msg: "request body" });
  } catch (error) {
    res.status(400).json({ msg: "Internal server error" });
  }
};

// module.exports  = {signup, signin};
