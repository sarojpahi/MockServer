const User = require("../Model/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const find = await User.findOne({ email });
    if (!find) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      let domain = email.split("@")[1];
      const role = domain === "masaischool.com" ? "admin" : "user";
      await User.create({
        name,
        email,
        password: hashPassword,
        role,
      });
      return res.status(201).send({
        message: `${role === "admin" ? "Admin" : "User"} Created Successfully`,
      });
    }
    return res.status(409).send({
      message: "User already exists",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const validate = await bcrypt.compare(password, user.password);
    if (validate) {
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
          role: user.role,
        },
        "SECRET1234",
        {
          expiresIn: "7 days",
        }
      );
      return res.status(200).send({
        message: "Login successful",
        token,
        role: user.role,
      });
    }
    return res.status(401).send({
      message: "Invalid Credentials",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { signup, login };
