const router = require('express').Router();
const{User, Blog} = require('../../models');


//create new user

router.post ('/signup', async (req, res) =>
{
    try{
        const  userData = await User.create({
            email: req.body.email, 
            password: req.body.password,
        });
        req.session.save(()=> {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message:"Signup successful"});
        });
    } catch (err){
        console.log(err);
        req.status(500).json(err);
    }

})

//login existing user

router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// logout existing user

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).json("You are now logged out");
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;