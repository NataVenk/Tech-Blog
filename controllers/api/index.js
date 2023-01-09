const router = require('express').Router();
const userRoutes = require('./users_routes');
const blogRoutes = require('./blog-routes');
const seedDatabase = require ('../../seeds/seeds');


router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

// router.post('/seedDatabase', (req,res) =>{
//     seedDatabase(function(){
//         res.json({
//             message: "all seeded"
//         })
//     })
// });

module.exports = router;
