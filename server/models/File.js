
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    fileType:{
      type:String,
      require:true,
    },
    secure_url:{
      type:String,
      require:true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
