import User from "../models/users.js";
import bodyParser from "body-parser";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const sendUser = async (req, res) => {
  try {
    const users = new User({
      username: req.body.username,
      password: req.body.password,
    });
    users.save();
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
