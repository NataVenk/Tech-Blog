const router = require('express').Router();
const { Blog, User, UserComment} = require('../models');
const withAuth = require('../utils/auth');

//routing to homepage
router.get('/', async (req, res) => {
    res.render('login', {
      logged_in: req.session.logged_in
    });
  })

  router.get('/signup', async (req, res) => {
    res.render('signup', {
      logged_in: req.session.logged_in
    });
  })


router.get('/dashboard',  async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Blog }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('dashboard', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports=router
// router.get('/')