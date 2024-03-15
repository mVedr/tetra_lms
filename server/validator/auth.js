// const { check } = require("express-validator");

// const 

// exports.validateRegisterRequest = [
//   check("name").notEmpty().withMessage("Name is required"),
//   check("email").isEmail().withMessage("Valid Email is required"),
//   check("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must be at least 6 character long"),
// ];

// exports.validateSigninRequest = [
//   check("email").isEmail().withMessage("Valid Email is required"),
//   check("password")
//     .isLength({ min: 6 })
//     .withMessage("Password must be at least 6 character long"),
// ];

// exports.isRequestValidated = (req,res,next)=>{
//   const errors = validationRequest(req);
//   if(errors.array().Length()>0){
//     return res.status(400).json({error: errors.array()[0].msg})
//   }
//   next();
// }

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.phone)) {
    errors.phone = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};