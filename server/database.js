'use strict';
const mongoose = require('mongoose');
const dotenv = require("dotenv").config({ path: "./config.env" });
// module.exports = () =>{
//     mongoose.connect('mongodb://localhost/upload-files-database2',{}).then(()=>console.log('connected to mongodb'))
// }

module.exports = () =>{
    mongoose.connect(process.env.MONGODB_URL,{}).then(()=>console.log('connected to mongodb'))
}