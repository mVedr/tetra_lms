const User = require("../models/userSchema");
const Score = require("../models/Score");
const Training = require("../models/training")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const {
//   validateRegisterInput,
//   validateLoginInput
// } = require("../validator/auth");

const nodemailer = require("nodemailer");
const { validationResult } = require("express-validator");
const { response } = require("express");
const training = require("../models/training");

exports.registerUser = async (req, res) => {
  //   const { errors, isValid } = validateRegisterInput(req.body);
  // // Check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
  const {
    employId,
    name,
    email,
    phone,
    password,
    location,
    company,
    department,
  } = req.body;

  if (
    !employId ||
    !name ||
    !email ||
    !phone ||
    !password ||
    !location ||
    !company ||
    !department
  ) {
    return res.status(422).json({ error: "plz filled the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email Already Exist" });
    } else {
      const user = new User({
        employId,
        name,
        email,
        phone,
        password,
        location,
        company,
        department,
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
  //   // Form validation
  // const { errors, isValid } = validateLoginInput(req.body);
  // // Check validation
  //   if (!isValid) {
  //     return res.status(400).json(errors);
  //   }
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
      // token = await userLogin.generateAuthToken();

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        userLogin.tokens = undefined;
        userLogin.password = undefined;
        res.json({ message: "user signin successfully", user: userLogin });
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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
    });

    const mailOptions = {
      from: "training@tetrahedron.in",
      to: `${user.email}`,
      subject: "Link To Reset Password",
      text: `You are receiving this because you have requested to changed password of your account OTP: ${user.verifyOtp}`,
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error("there is an error:", err);
      } else {
        console.log("here is res:", response);
      }
    });
    responseType.statusText = "Success";
    responseType.message = "Please check your Email_ID";
  } else {
    responseType.statusText = "error";
    responseType.message = "Email_ID not Exist";
  }
  res.status(200).json(responseType);
};

exports.updatePassword = async (req, res) => {
  const { email, otp, password } = req.body;
  if (!email || !otp || !password) {
    return res.status(400).json({
      error: "please send email and otp and password",
    });
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
    const users = await User.find().populate("courseId");
    res.status(201).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAllUserByCompany= async (req, res, next) => {
  try {
    let comp = req.params.comp;
    const users = await User.find({company:comp}).populate("courseId");
    res.status(201).send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.putUserData = async (req, res, next) => {
  try {
    let id = req.params.id;
    const user = await User.findByIdAndUpdate({_id:id},{name:req.body.name,location:req.body.location,email:req.body.email,phone:req.body.phone});
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const user = await User.findById(id).populate("courseId");
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getallMarks = async (req, res, next) => {
  const { submitedBy } = req.body;
  try {
    let id = req.params.id;
    const marks = await Score.find({ submitedBy: id }).populate(
      "course",
      "coursename category duration"
    );
    res.status(201).send(marks);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// exports.updateScore = async (req, res) => {

//   const {email, marks}= req.body;

// let user = await User.findOne({
//   email: email,
// });
// console.log(user);
// var response = {};

//     user.marks = req.body.marks;
//     await user.save();
//     response.message = "Score saved Successfully";
//     response.statusText = "Success";

// res.status(200).json(response);
// };

exports.courseAssign = async(req,res,next) =>{
  let id = req.params.id;
  try{
    
    let training = await Training.findOne({coursename:req.body.coursename});
    console.log(training._id);
  let user = await User.findById(id);
    user.courseId.push(training._id);
    await user.save();
    res.status(201).send("Course Assign Successfully");
    
  }catch(error){
    console.log(error);
  }
}

exports.RoleAssign = async(req,res,next) =>{
  let id = req.params.id;
  try{
    
    let user = await User.updateOne({_id:id},{role:req.body.role});

    res.status(201).send("Role Assign Successfully");
    
  }catch(error){
    console.log(error);
  }
}

exports.delUser = async (req, res, next) => {
  // get id of the training
  let id = req.params.id;
  try{
    let user = await User.findByIdAndDelete({_id:id});
    res.json({
      message:"user deleted Succeessfully",
    });
    console.log("question Deleted");
  }
  catch(err){
    console.log(err);
  }
};
