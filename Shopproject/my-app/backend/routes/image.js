const express = require("express");
const Image = require("../models/users.js");
const ImageRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload=multer({
    storage:storage
})
ImageRouter.route("/uploadmulter").post(upload.single("imageData"),(req,res,next)=>{
    console.log(req.body);
    const newImage=new Image({
        imageName:req.body.imageName,
        ImageData:req.file.path
    })
    newImage.save().then((result)=>{
        res.status(200).json({
            success:true,
            document:result,
        })}).catch((err)=>next(err));
})