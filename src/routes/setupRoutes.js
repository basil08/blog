import Post from "../schemas/post.js";
import { micromark } from "micromark";

export default function setupRoutes(app) {
  app.get("/", async (req, res) => {
    // TODO: pagination
    // let posts = await Post.find().sort({ date: -1 });

    // console.log(posts);
    const posts = [];

    res.render("index.pug", { title: "Home", posts: posts });
  });

  app.get("/post/:postId", async (req, res) => {
    const post = await Post.findOne({ _id: req.params.postId });
    res.render("post.pug", { title: `Post - ${post.title}`, post: post });
  });

  app.get("/new", (req, res) => {
    res.render("new.pug", { title: `Create New Post`});
  });

  app.post("/new", async (req, res) => {
    console.log(req.body);
    const { title, author, mdText } = req.body;

    console.log("mdText ", mdText);

    const htmlText = micromark(mdText);

    console.log("htmlText ", htmlText);

    try {
      const post = new Post({
        title,
        author,
        mdText,
        htmlText,
      });

      await post.save();
      return res.status(200).json({
        error: false,
        message: "Post created successfully!",
        data: post._id,
      });
    } catch (e) {
      return res.status(500).json({ error: true, message: e });
    }
  });

  app.get("/new", async (req, res) => {});
}
