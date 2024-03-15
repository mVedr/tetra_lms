"use strict";
const express = require("express");
const { delTraining,delTrainingVideo, delTrainingTest,addTraining, getallTrainings, getTrainingById, addVideoToTraining,addTestToTraining } = require("../controllers/tutorialController");
const {requireSignin} = require('../middlewares/index')

const router = express.Router();

router.post("/training",addTraining);
router.get("/training",getallTrainings);
router.get("/training/:id",getTrainingById);
router.delete("/delete/training/:id",delTraining);
router.put("/training/:id",addVideoToTraining);
router.delete("/delete/training/file/:id",delTrainingVideo);
router.put("/training/:id/test",addTestToTraining);
router.delete("/delete/training/test/:id",delTrainingTest);
module.exports = router;