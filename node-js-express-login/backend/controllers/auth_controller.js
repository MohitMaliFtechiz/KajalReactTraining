const bcrypt = require("bcryptjs");
const User = require("../models/user_model");

//registration
exports.signup = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

    const userExit = await User.findOne({ email: email });
    if (userExit) {
      return res.status(400).json({ msg: "Email already exits" });
    }

    // Create the new user
    const userCreated = await User.create({
      username,
      email,
      password,
      isAdmin,
    });

    // You can return the newly created user data
    res.status(200).json({
      msg: "User registered successfully",
      // data: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExist = await User.findOne({ username });

    if (userExist) { // Check if the user exists
      const isPasswordValid = bcrypt.compareSync(password, userExist.password);

      if (isPasswordValid) { // Check if the password is valid
        res.status(200).json({
          msg: "Login successfully",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
      } else {
        res.status(401).json({ msg: "Invalid password" });
      }
    } else {
      res.status(404).json({ msg: "Invalid Credentials" }); // User not found
    }
  } catch(error) {
    res.status(500).json({ msg: "Internal server error" }); // Internal server error
  }
}


// module.exports  = {signup, signin};
