const router = require("express").Router();
const { Blog, User, UserComment } = require("../models");
const withAuth = require("../utils/auth");

//routing to homepage
router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

router.get("/login", async (req, res) => {
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

router.get("/signup", async (req, res) => {
  res.render("signup", {
    logged_in: req.session.logged_in,
  });
});

router.get("/home", async (req, res) => {
  const allBlogs = await Blog.findAll({});
  const bloglist = allBlogs.map((value) => value.get({ plain: true }));
  console.log(bloglist);
  return res.render("home", {
    bloglist,
    logged_in: req.session.logged_in,
  });
});

router.get("/newblog", withAuth, async (req, res) => {
  return res.render("newblog", {
    logged_in: req.session.logged_in,
  });
});
// adding comment to the blog selected
router.get("/blog/:id", async (req, res) => {
  const blog = await Blog.findOne({
    where: { id: req.params.id },
  });
  const blog2comment = blog.get({ plain: true });
 
  return res.render("singleblog", {
    ...blog2comment,
    logged_in: req.session.logged_in,
  });
});
// updating blog selected
router.get("/blogs/:id", async (req, res) => {
  const blog = await Blog.findOne({
    where: { id: req.params.id },
  });
  const blogUpdate = blog.get({ plain: true });
  console.log("=====updated====");
  console.log(blogUpdate);
  return res.render("modify-blog", {
    ...blogUpdate,
    logged_in: req.session.logged_in,
  });
});


router.get("/dashboard", withAuth, async (req, res) => {
  console.log("==================");
  try {
    const myBlogs = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Blog,
          attributes: ["blog_topic", "blog_body", "id"],
        },
      ],
    });

    const user = myBlogs.get({ plain: true });
   

    return res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
