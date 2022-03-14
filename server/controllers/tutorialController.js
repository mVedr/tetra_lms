"use strict";
const Training = require("../models/training");
const File = require("../models/File");
const cloudinary = require("cloudinary");

// add training
exports.addTraining = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  try {
    let result = await cloudinary.v2.uploader.upload(
      req.files.file.tempFilePath,
      {
        folder: "tetralms",
        resource_type: "auto",
      }
    );
    const post_details = {
      coursename: req.body.coursename,
      category: req.body.category,
      description: req.body.description,
      rating: req.body.rating,
      secure_url: result.secure_url,
    };
    console.log(post_details);

    const post = Training(post_details);
    await post.save();
    res.status(201).send("file Uploaded Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.addVideoToTraining = async (req, res, next) => {
  
  // get id of the training
  let id = req.params.id;
  try {


    var training =await Training.findById(id);
    if(!training)
    {
      res.status(400).json({
        error:"training does not exists"
      })
    }
    let result = await cloudinary.v2.uploader.upload(
      req.files.file.tempFilePath,
      {
        folder: "tetralms",
        resource_type: "auto",
        chunk_size: 6000000
      }
    );

    const post_details = {
      secure_url: result.secure_url,
    };
    console.log(post_details);

    const file = File(post_details);
     await file.save();

     training.videoId.push(file._id);
     await training.save();


    res.status(201).send("file Uploaded Successfully");
  } catch (error) {
    console.log(error);
  }
};


// get all trainings
exports.getallTrainings = async (req, res, next) => {
  try {
    const files = await Training.find();
    res.status(201).send(files);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// get trainings by id
exports.getTrainingById = async (req, res, next) => {
  try {
    let id = req.params.id;
    const files = await Training.findById(id).populate("videoId");
    res.status(201).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};





