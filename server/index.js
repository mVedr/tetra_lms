"use strict";
const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 8080;
// const cloudinary = require("cloudinary");
// require("./cloudinary");
const AWS = require('aws-sdk');

const userRoutes = require("./routes/user");
const tutorialRoutes =require("./routes/tutorial");
const cookieParser = require("cookie-parser");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const params = {
  Bucket:process.env.BUCKET_NAME,
}

s3.createBucket(params,(err,data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("Bucket Created Successfully",data.Location);
  }
})
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_API_CLOUD,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });


// db connection
require("./database")();

// middle wares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// routes
// app.use("/api", fileRoutes.routes);
app.use("/api",userRoutes);
app.use("/api",tutorialRoutes);
app.use("/",userRoutes);


// TODO: rotes 
app.use("/api/calendar", require("./controllers/CalenderControler"));
app.use(express.static('public/build'));
app.get("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','build','index.html'));
})
// app.get("/", (req, res) => {
//   console.log("hello");
//   res.send(`hello how are u`);
// });

//require for listen server
// port Number, host(default), callback func
app.listen(port, () => {
  console.log(`server is listening on url http://localhost:${port}`);
});
