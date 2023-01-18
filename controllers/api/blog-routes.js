const router = require("express").Router();
const path = require("path");
const { Blog, User, UserComment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  console.log(req.body.blog_topic);
  console.log(req.body.blog_body);
  console.log(req.session.user_id);
  try {
    const newBlog = await Blog.create({
      blog_topic: req.body.blog_topic,
      blog_body: req.body.blog_body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:id", async (req, res) => {
 
  try {
    const newComment = await UserComment.create({
      blog_comment: req.body.blog_comment,
      blog_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.put("/:id", async (req, res) => {
  console.log("i'm here");
  try {
    const blogupdates = await Blog.create({
      blog_topic: req.body.blog_topic,
      blog_body: req.body.blog_body,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogupdates);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
