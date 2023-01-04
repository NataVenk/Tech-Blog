const router = require('express').Router();
const{User} = require('../../models');

//create new user

router.post ('/signup', async (req, res) =>
{
    try{
        const  userData = awaut (User.create)({
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
router.post('/login', async (req, res) => {
    try {
      const userData = await Member.findOne({ where: { email: req.body.email } });
  
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