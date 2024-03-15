"use strict";
const Training = require("../models/training");
const File = require("../models/File");
const Test = require("../models/Test");
const Score = require("../models/Score");
const cloudinary = require("cloudinary");
const path = require("path");
const AWS = require("aws-sdk");
const fs = require("fs");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});
// add training
exports.addTraining = async (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  try {
    const imagePath = req.files.file.tempFilePath;
    const blob = fs.readFileSync(imagePath);
    const uploadedImage = await s3
      .upload({
        Bucket: process.env.BUCKET_NAME,
        Key: req.files.file.name,
        Body: blob,
      })
      .promise();
    // let result = await cloudinary.v2.uploader.upload(
    //   req.files.file.tempFilePath,
    //   {
    //     folder: "tetralms",
    //     resource_type: "auto",
    //   }
    // );
    const post_details = {
      coursename: req.body.coursename,
      category: req.body.category,
      description: req.body.description,
      rating: req.body.rating,
      secure_url: uploadedImage.Location,
      duration: req.body.duration,
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
    var training = await Training.findById(id);
    if (!training) {
      res.status(400).json({
        error: "training does not exists",
      });
    }
    // let result = await cloudinary.v2.uploader.upload(
    //   req.files.file.tempFilePath,
    //   {
    //     folder: "tetralms",
    //     resource_type: "auto",
    //     chunk_size: 6000000
    //   }
    // );
    const videoPath = req.files.file.tempFilePath;
    // const blob = fs.readFileSync(videoPath);
    // const uploadedVideo = await s3.upload({
    //   Bucket: process.env.BUCKET_NAME,
    //   Key: req.files.file.name,
    //   Body: blob,
    // }).promise()

    const statsFile = fs.statSync(videoPath);
    var fileNameInS3 = req.files.file.name;
    console.info(`file size: ${Math.round(statsFile.size / 1024 / 1024)}MB`);

    //  Each part must be at least 5 MB in size, except the last part.
    let uploadId;
    try {
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: fileNameInS3,
      };
      const result = await s3.createMultipartUpload(params).promise();
      uploadId = result.UploadId;
      console.info(
        `csv ${fileNameInS3} multipart created with upload id: ${uploadId}`
      );
    } catch (e) {
      throw new Error(`Error creating S3 multipart. ${e.message}`);
    }

    const chunkSize = 10 * 1024 * 1024; // 10MB
    const readStream = fs.createReadStream(videoPath); // you can use a second parameter here with this option to read with a bigger chunk size than 64 KB: { highWaterMark: chunkSize }

    // read the file to upload using streams and upload part by part to S3
    const uploadPartsPromise = new Promise((resolve, reject) => {
      const multipartMap = { Parts: [] };

      let partNumber = 1;
      let chunkAccumulator = null;

      readStream.on("error", (err) => {
        reject(err);
      });

      readStream.on("data", (chunk) => {
        // it reads in chunks of 64KB. We accumulate them up to 10MB and then we send to S3
        if (chunkAccumulator === null) {
          chunkAccumulator = chunk;
        } else {
          chunkAccumulator = Buffer.concat([chunkAccumulator, chunk]);
        }
        if (chunkAccumulator.length > chunkSize) {
          // pause the stream to upload this chunk to S3
          readStream.pause();

          const chunkMB = chunkAccumulator.length / 1024 / 1024;

          const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileNameInS3,
            PartNumber: partNumber,
            UploadId: uploadId,
            Body: chunkAccumulator,
            ContentLength: chunkAccumulator.length,
          };
          s3.uploadPart(params)
            .promise()
            .then((result) => {
              console.info(
                `Data uploaded. Entity tag: ${result.ETag} Part: ${params.PartNumber} Size: ${chunkMB}`
              );
              multipartMap.Parts.push({
                ETag: result.ETag,
                PartNumber: params.PartNumber,
              });
              partNumber++;
              chunkAccumulator = null;
              // resume to read the next chunk
              readStream.resume();
            })
            .catch((err) => {
              console.error(`error uploading the chunk to S3 ${err.message}`);
              reject(err);
            });
        }
      });

      readStream.on("end", () => {
        console.info("End of the stream");
      });

      readStream.on("close", () => {
        console.info("Close stream");
        if (chunkAccumulator) {
          const chunkMB = chunkAccumulator.length / 1024 / 1024;

          // upload the last chunk
          const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileNameInS3,
            PartNumber: partNumber,
            UploadId: uploadId,
            Body: chunkAccumulator,
            ContentLength: chunkAccumulator.length,
          };

          s3.uploadPart(params)
            .promise()
            .then((result) => {
              console.info(
                `Last Data uploaded. Entity tag: ${result.ETag} Part: ${params.PartNumber} Size: ${chunkMB}`
              );
              multipartMap.Parts.push({
                ETag: result.ETag,
                PartNumber: params.PartNumber,
              });
              chunkAccumulator = null;
              resolve(multipartMap);
            })
            .catch((err) => {
              console.error(
                `error uploading the last csv chunk to S3 ${err.message}`
              );
              reject(err);
            });
        }
      });
    });

    const multipartMap = await uploadPartsPromise;

    console.info(
      `All parts have been upload. Let's complete the multipart upload. Parts: ${multipartMap.Parts.length} `
    );

    // gather all parts' tags and complete the upload

    //try {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileNameInS3,
      MultipartUpload: multipartMap,
      UploadId: uploadId,
    };
    const result = await s3.completeMultipartUpload(params).promise();
    console.info(
      `Upload multipart completed. Location: ${result.Location} Entity tag: ${result.ETag}`
    );
    // } catch (e) {
    //     throw new Error(`Error completing S3 multipart. ${e.message}`);
    // }

    const post_details = {
      secure_url: result.Location,
      fileType: req.body.fileType,
    };
    console.log(post_details);

    const file = File(post_details);
    await file.save();
    if(file.fileType==='Pdf'){
    training.pdfId.push(file._id);
    await training.save();
    res.status(201).send("Pdf Uploaded Successfully");
    }
    else if(file.fileType==='Video'){
      training.videoId.push(file._id);
    await training.save();
    res.status(201).send("Video Uploaded Successfully");
    }
    else if(file.fileType==='Assignment'){
      training.assignId.push(file._id);
    await training.save();
    res.status(201).send("Assignment Uploaded Successfully");
    }
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
    const files = await Training.findById(id)
      .populate("videoId")
      .populate("testId").populate("pdfId").populate("assignId");
    res.status(201).send(files);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
exports.delTraining = async(req,res,next) =>{
  try{
    let id = req.params.id;
    let training = await Training.findOneAndDelete({_id:id});
    let score = await Score.deleteMany({course:id});
    res.json({
      message:"Course is deleted Successfully"
    });
  }
  catch(error){
    res.status(400).send(error.message);
    console.log(error);
  }
}
exports.addTestToTraining = async (req, res, next) => {
  // get id of the training
  let id = req.params.id;
  let { question, choiceA, choiceB, choiceC, choiceD, answer } = req.body;
  try {
    var training = await Training.findById(id);
    if (!training) {
      res.status(400).json({
        error: "training does not exists",
      });
    }

    const post_details = {
      question,
      choiceA,
      choiceB,
      choiceC,
      choiceD,
      answer,
    };
    console.log(post_details);

    const test = Test(post_details);
    await test.save();

    training.testId.push(test._id);
    await training.save();

    res.status(201).send("question Uploaded Successfully");
  } catch (error) {
    console.log(error);
  }
};

exports.delTrainingTest = async (req, res, next) => {
  // get id of the training
  let id = req.params.id;
  try{
    let test = await Test.findByIdAndDelete({_id:id});
    res.json({
      message:"question deleted Succeessfully",
    });
    console.log("question Deleted");
  }
  catch(err){
    console.log(err);
  }
};

exports.delTrainingVideo = async (req, res, next) => {
  // get id of the training
  let id = req.params.id;
  try{
    let test = await File.findByIdAndDelete({_id:id});
    res.json({
      message:"File deleted Succeessfully",
    });
    console.log("file Deleted");
  }
  catch(err){
    console.log(err);
  }
};
