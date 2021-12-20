import express from  "express";
import multer from "multer";
import {
  getpost,
  sendpost,
  sendcategory,
  getcategory,
  filtercategory,
  deletepost,
  deletepostca,uploadImage,uploads} from  "../controllers/posts.js";
const router = express.Router();

router.post("/upload",uploadImage, uploads);
router.get("/", getpost);
router.get("/add", getpost);
router.post("/add", sendpost);
router.get("/addcategories", getcategory);
router.post("/addcategories", sendcategory);
router.get("/delete/:id", deletepost);
router.get("/deleteca/:id", deletepostca);
router.get("/:id", filtercategory);

export default router;