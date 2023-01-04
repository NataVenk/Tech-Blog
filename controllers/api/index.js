const router = require('express').Router();
const userRoutes = require('./users-routes');
const postRoutes = require('./posts-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
