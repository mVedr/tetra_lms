// const { time } = require("console");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const singleFileSchema = new Schema(
  {
    coursename: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    // rating: {
    //   type: Number,
    //   require: true,
    // },
    secure_url:{
      type:String,
      require:true,
    },
    duration:{
      type:Number,
      require:true,
    },
   videoId:[{ type: mongoose.Schema.Types.ObjectId, ref:'File' }],
   testId:[{ type: mongoose.Schema.Types.ObjectId, ref:'Test' }],
   pdfId:[{type:mongoose.Schema.Types.ObjectId,ref:'File'}],
   assignId:[{type:mongoose.Schema.Types.ObjectId,ref:'File'}]

  },
  { timestamps: true }
);

module.exports = mongoose.model("Training", singleFileSchema);
