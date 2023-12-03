require("dotenv").config();
const express = require("express");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

//creating a user

router.post(
  "/createUser",
  [
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res, err) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      let success = false;
      return res.status(400).json({ success, error: error.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "User with this email already exists!" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.status(200).json({ success, authtoken });
    } catch {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//authenticate a user
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res, err) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      let success = false;
      return res.status(400).json({ success, error: error.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials!",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials!",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, process.env.JWT_SECRET);
      success = true;
      res.status(200).json({ success, authtoken });
    } catch {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  }
);

//getting loggedin user details

router.post("/getuser", fetchuser, async (req, res, err) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    success = True;
    res.send(success, user);
  } catch {
    console.error(err.message);
    success = false;
    res.status(500).send(success, "Internal Server Error");
  }
});

module.exports = router;
