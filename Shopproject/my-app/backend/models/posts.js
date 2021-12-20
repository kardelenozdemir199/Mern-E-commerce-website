import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  photoname:{
    type:String
  }

});

const Post = mongoose.model("Post", postSchema);
export default Post;
