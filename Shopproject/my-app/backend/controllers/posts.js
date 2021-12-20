import Post from "../models/posts.js";
import Category from "../models/categories.js";
import multer from "multer";
import path from "path";
import bodyParser from "body-parser";

const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads/");
  },
  filename: function (req, file, cb) {
    const posts = new Post();
    const ext = file.mimetype.split(`/`)[1];
    cb(null, `${file.originalname}`);
    /* `image-${Date.now()}.${ext}`*/
  },
});
export const uploads = (req, res) => {
  res.status(200).json({
    success: "success",
  });
};
const upload = multer({
  storage: multerConfig,
});
export const uploadImage = upload.single("photo");
export const sendpost = (req, res) => {
  const posts = new Post({
    title: req.body.title,
    text: req.body.text,
    category: req.body.category,
    price: req.body.price,
    photoname: req.body.photo,
  });
  posts.save();
};
export const getpost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const getcategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const sendcategory = async (req, res) => {
  try {
    const categories = new Category({
      category: req.body.category,
    });
    categories.save();
  } catch {
    res.status(404).json({
     message: error.message,
    });
  }
};
export const filtercategory = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const id = req.params.id;
    console.log(id);
    const posts = await Post.find({ category: id });
    res.status(200).json(posts);
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const deletepost = async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await Post.findOneAndRemove({ title: id });
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const deletepostca = async (req, res) => {
  try {
    const id = req.params.id;
    const categories = await Category.findOneAndRemove({ category: id });
  } catch {
    res.status(404).json({
      message: error.message,
    });
  }
};
