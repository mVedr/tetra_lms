
const express = require("express");
const router = express.Router();
// const authenticate = require('../middlewares/authenticate');
const { registerUser, loginUser, forgotPassword, logout, updatePassword, getUserById,getAllUser} = require("../controllers/userController");

router.post("/register",registerUser);

router.post("/signin", loginUser);

// router.get('/dashboard',authenticate,(req,res)=>{
//     console.log(`hello homedashboard`);
//     res.send(req.rootUser);
// })

router.get("/getUser",getAllUser);

router.get("/getUser/:id",getUserById);

router.post("/forgot",forgotPassword)

router.put("/change-password",updatePassword)

router.get("/logout", logout);


module.exports = router;
