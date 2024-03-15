const express = require("express");
const Review = require("../models/Review");
const router = express.Router();
const {reviewuser} = require('../controllers/reviewController');
router.post("/createReview",reviewuser);