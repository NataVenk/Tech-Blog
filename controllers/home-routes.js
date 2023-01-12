const router = require('express').Router();
const { Blog, User, UserComment} = require('../models');
const withAuth = require('../utils/auth');

//routing to homepage
router.get('/', async (req, res) => {
  if (req.session.logged_in){
    res.redirect('/dashboard')
    return
  }
    res.render('login', {
      logged_in: req.session.logged_in
    });
  })

  router.get('/signup', async (req, res) => {
    res.render('signup', {
      logged_in: req.session.logged_in
    });
  })


router.get('/home',  async (req, res) => {
  const allBlogs = await Blog.findAll({
  })
  const bloglist = allBlogs.map(value => value.get({ plain: true }))
  console.log(bloglist);
  return res.render('home', {
    bloglist,
    logged_in: req.session.logged_in
  });
});
  
router.get('/dashboard', withAuth, async (req, res) => {
  console.log("==================")
  try{
  const myBlogs = await User.findByPk(req.session.user_id, {
    include: [
      {
        model: Blog, 
        attributes: ['blog_topic', 'blog_body'],
      }
    ],
  });
  console.log(myBlogs)

  // const user = myBlogs.get({ plain: true });
  return res.render('dashboard', {
    // user,
    // myBlogs,
    logged_in: req.session.logged_in
    
  });
} catch (err){
  res.status(500).json(err);
}
});


  module.exports=router
