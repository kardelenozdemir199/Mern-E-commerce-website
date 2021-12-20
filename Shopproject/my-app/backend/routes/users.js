import express from "express";
import {
  getUser,
  sendUser,
 
} from "../controllers/users.js";

const router = express.Router();
router.get("/", getUser);
router.post("/add", sendUser);

export default router;
