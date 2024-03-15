// const cloudinary = require("cloudinary");
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_API_CLOUD,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
const AWS = require('aws-sdk');
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