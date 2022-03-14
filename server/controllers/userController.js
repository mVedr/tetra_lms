const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  validateRegisterRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validator/auth");

const { validationResult } = require("express-validator");

exports.registerUser = async (req, res) => {
  const { name, email, phone, password} = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "plz filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        password,
        // username: Math.random().toString(),
      });

      const userRegistered = await user.save();
      if (userRegistered) {
        res.status(201).json({ message: "user registered successfully" });
      } else {
        res.status(422).json({ error: "failed to register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });

        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.forgotPassword = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  var responseType = {};
  if (user) {
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    user.verifyOtp = otpcode;
    user.otpExpiry = new Date().getTime() + 300 * 1000;
    await user.save();

    responseType.statusText = "Success";
    responseType.message = "Please check your Email_ID";
  } else {
    responseType.statusText = "error";
    responseType.message = "Email_ID not Exist";
  }
  res.status(200).json(responseType);
};

exports.updatePassword = async (req, res) => {


    const {email, otp,password}= req.body;
    if(!email || !otp || !password){
      return  res.status(400).json({
            error: "please send email and otp and password"
        })
    }

  let user = await User.findOne({
    email: email,
    verifyOtp: otp,
  });
  console.log(user);
  var response = {};
  if (user) {
    let currentTime = new Date().getTime();
    let diff = user.expireIn - currentTime;
    if (diff < 0) {
      response.message = "Token Expire";
      response.statusText = "error";
    } else {
      user.password = req.body.password;
      user.verifyOtp = undefined;
      user.otpExpiry = undefined;
      await user.save();
      response.message = "Password changed Successfully";
      response.statusText = "Success";
    }
  } else {
    response.message = "Invalid Otp";
    response.statusText = "error";
  }
  res.status(200).json(response);
};

exports.logout = (req, res) => {
  console.log(`Hello my logout page`);
  res.clearCookie("jwtoken", { path: "/ " });
  res.status(200).send("User logout");
};


exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(201).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const user = await User.findById(id);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};