const jwt = require("jsonwebtoken");
const express = require("express");
const Training = require("../models/training");
const User = require("../models/userSchema");
const Score = require("../models/Score");
const router = express.Router();
// const authenticate = require('../middlewares/authenticate');
const {
  registerUser,
  getallMarks,
  loginUser,
  forgotPassword,
  logout,
  updatePassword,
  getUserById,
  getAllUser,
  putUserData,
  courseAssign,
  getAllUserByCompany,
  RoleAssign,
  delUser
} = require("../controllers/userController");
const { ensureToken } = require("../helpers/authhelper");

router.post("/register", registerUser);

router.post("/signin", loginUser);

// router.get('/dashboard',authenticate,(req,res)=>{
//     console.log(`hello homedashboard`);
//     res.send(req.rootUser);
// })

router.get("/getAllUser", getAllUser);
router.get("/getAllUser/:comp", getAllUserByCompany);
// router.get("/getUser", verifyToken ,async(req,res)=>{
//          jwt.verify(req.jwtoken,process.env.SECRET_KEY,async(err, authorizedData) => {
//             if(err){
//                 //If error send Forbidden (403)
//                 console.log('ERROR: Could not connect to the protected route');
//                 res.sendStatus(403);
//             } else {
//                 //If token is successfully verified, we can send the autorized data

//              const user = await User.findById(authorizedData);
//              user.password = undefined;
//              user.tokens=undefined;
//                  res.status(200).json({
//                    user
//                  })
//                 // res.json({
//                 //     message: 'Successful log in',
//                 //     authorizedData
//                 // });
//                 console.log('SUCCESS: Connected to protected route');
//             }
//         })
//     });

// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers['Authorization']?.split(' ')[1]|| req.cookies.jwtoken;
//     console.log(bearerHeader);

//     if (bearerHeader) {

//       req.jwtoken = bearerHeader;
//       next();
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
//   }

router.post("/quiz/:id/markscored", async (req, res) => {
  const { marks, submitedBy, level } = req.body;
  // get id of the training
  let id = req.params.id;
  if (!marks) {
    return res.status(422).json({ error: "please fill scored" });
  }
  var training = await Training.findById(id);
  var scored = await Score.findOne({
    course: training._id,
    submitedBy: submitedBy,
  });
  //  console.log(scored);

  if (scored) {
    var prevLevel = scored.level;

    var updateScore = Score.updateMany(
      { course: training._id, submitedBy: submitedBy },
      { marks: req.body.marks, level: req.body.level },
      (req, res) => {}
    );

    res.json("updated succesfully");

    var levels = parseInt(level);
    var user = await User.findById(submitedBy);
    var totalLevel = levels + (user.totalMarks - prevLevel);
    var updatedMarks = User.findByIdAndUpdate(
      { _id: submitedBy },
      { totalMarks: totalLevel },
      (req, res) => {}
    );
  } else {
    const post = new Score({
      marks,
      submitedBy,
      level,
      course: training._id,
    });
    var totalTime = training.duration;
    var user = await User.findById(submitedBy);
    var time = totalTime + user.timeSpent;
    var updatedTime = User.updateOne(
      { _id: submitedBy },
      { timeSpent: time },
      (req, res) => {}
    );

    await post
      .save()
      .then((result) => {
        res.json({ post: result });
      })
      .catch((err) => {
        console.log(err);
      });
    var levels = parseInt(level);
    var user = await User.findById(submitedBy);
    var totalLevel = levels + user.totalMarks;
    var updatedMarks = User.findByIdAndUpdate(
      { _id: submitedBy },
      { totalMarks: totalLevel },
      (req, res) => {}
    );
  }
});

function verifyToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(402).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(402).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    User.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
}
router.get("/getUser/:id", getUserById);

router.post("/forgot", forgotPassword);

router.put("/change-password", updatePassword);

router.get("/logout", logout);

 router.put("/user/:id/updateUser",putUserData);

router.get("/marks/:id", getallMarks);

router.put("/assign/course/:id",courseAssign);

router.put("/assign/Role/:id",RoleAssign);

router.delete("/delete/user/:id",delUser);
module.exports = router;
