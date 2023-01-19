const router = require("express").Router();
const path = require("path");
const { Blog, User, UserComment } = require("../../models");
const withAuth = require("../../utils/auth");


// creating a blog

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
//// getting specific blog to add comment/modify
router.post("/:id", async (req, res) => {
 
  try {
    const newComment = await UserComment.create({
      id: req.body.id,
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

/// modify blog
router.put("/:id", async (req, res) => {
  console.log("i'm here inside put");
  try {
    const blogupdate = await Blog.update({
      id: req.body.id,
      blog_topic: req.body.blog_topic,
      blog_body: req.body.blog_body,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogupdate);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
/// delete blog
router.delete("/:id", (req, res) => {
  console.log ("inside delete")
   Blog.destroy({
      where: {
        id: req.params.id,
       
      },
    })
    .then ((deleteBlog) =>{
      res.json(deleteBlog);
    })
    .catch((err)  => res.json(err));
  });

    
module.exports = router;
