const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {

    employId:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   trim: true,
    //   index: true,
    //   lowercase: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    location:{
      type:String,
    },
    company:{
      type:String,
      required:true,
    },
    department:{
      type: String,
      required:true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    timeSpent:{
      type:Number,
      default:0,
    },
    totalMarks:{
      type: Number,
      default:0,
    },
    role: {
      type: String,
      enum: ["user", "admin","super-admin"],
      default: "user",
    },
    profilePicture: {
      type: String,
    },
    tokens: [
      {
        token: { type: String, required: true },
      },
    ],
    verifyOtp :{
      type: String, 

    },
    otpExpiry :{
      type : Number
    },
    courseId:[{ type: mongoose.Schema.Types.ObjectId, ref:'Training'}],
  },
  { timestamps: true }
);

//we are hashing the password
// userSchema.virtual('password').set(function(password){
//     this.cpassword = bcrypt.hashSync(password,10);
// })
userSchema.pre("save", async function (next) {
  console.log("hi");
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    // this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//we generate the token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
   await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
//collection creation
const User = mongoose.model("User", userSchema);

module.exports = User;
