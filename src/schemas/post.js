import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  mdText: String,
  htmlText: String,
  author: String,
  date: { type: Date, default: Date.now },

});

const Post = mongoose.model('Post', postSchema);

export default Post;
