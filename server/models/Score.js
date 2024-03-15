const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const marksSchema = new Schema(
  {
    marks: {type: Number,require: true,},
    level: {type:Number,default:0},
    course:{ type: mongoose.Schema.Types.ObjectId, ref:'Training'},
    submitedBy:{ type: mongoose.Schema.Types.ObjectId, ref:'User' }
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", marksSchema);

module.exports = Score;