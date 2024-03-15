const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    review: {
      type: String,
      require: [true, 'review is required']
    },
   rating:{
       type:Number,
       min:1,
       max:10,
       required:[true,'rating is required']
   },
   createdAt:{
       type:Date,
       default:Date.now()
   },
   user:{
       type:mongoose.Schema.ObjectId,
       ref:'userSchema',
       required:[true,'review must belong to a user']
   },
   training:{
    type:mongoose.Schema.ObjectId,
    ref:'training',
    required:[true,'review must belong to a training']
}
});

//find , findby, findOne

reviewSchema.pre(/^find/,function(next){
this.populate({
    path:"user",
    select:"name"
}).populate("training");
next();
})
module.exports = mongoose.model("Review", reviewSchema);
