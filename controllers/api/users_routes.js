const router = require('express').Router();
const{User} = require('../../models');

//create new user

router.post ('/signup', async (req, res) =>
{
    try{
        const  userData = await (User.create)({
            name: req.body.name, 
            password: req.body.password,
        });
        req.session.save(()=> {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message:"Login successful"});
        });
    } catch (err){
        console.log(err);
        req.status(500).json(err);
    }

})

//login existing user

router.post('/login', async (req, res) => {
    try {
      const userData = await Member.findOne({ where: { username: req.body.username } });
  
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