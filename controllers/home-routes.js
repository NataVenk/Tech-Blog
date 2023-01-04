const router = require('express').Router();

//routing to homepage
router.get('/', async (req, res) => {
    res.render('index', {
      logged_in: req.session.logged_in
    });
  })