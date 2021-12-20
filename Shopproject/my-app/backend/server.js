import express from  "express";
import bodyParser from "body-parser" ;
import cors from "cors" ;
import multer from "multer";
import mongoose from "mongoose" ;
import dotenv from "dotenv"  ;
import posts  from "./routes/posts.js";
import users from "./routes/users.js" ;
const app = express();
dotenv.config();
app.use((req,res,next)=>{
  res.getHeader("Access-Control-Allow-Origin","*");
  res.getHeader("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Authorization");
  res.getHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE");
  next();
})
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/admin", posts);
app.use("/user", users);
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("calisti");
    });
  })
  .catch((err) => {
    console.log(err);
  });
