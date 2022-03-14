"use strict";
const dotenv = require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const port = process.env.PORT || 8080;
const cloudinary = require("cloudinary");
require("./cloudinary");
const userRoutes = require("./routes/user");
const tutorialRoutes =require("./routes/tutorial");


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// db connection
require("./database")();

// middle wares
app.use(cors());
app.use(express.json());


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

app.get("/", (req, res) => {
  console.log("hello");
  res.send(`hello how are u`);
});

app.listen(port, () => {
  console.log(`server is listening on url http://localhost:${port}`);
});
