const sequelize = require ('../config/connection');
const {User, Blog, UserComment} = require('../models');
const userData = require('./users.json');
const blogData = require ('./blog.json');
const userComment = require ('./user-comment.json');

const seedDatabase = async (cb) =>{
    await sequelize.sync({force: true});

    await User.bulkCreate (userData,{
        //add hooks
    });

    await Blog.bulkCreate(blogData, {
 //add hooks
    });

    await Blog.bulkCreate(userComment,{
 //add hooks
    });
    cb();
};

module.exports = seedDatabase;
