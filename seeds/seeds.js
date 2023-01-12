const sequelize = require ('../config/connection');
const {User, Blog, UserComment} = require('../models');
const userData = require('./users.json');
const blogData = require('./blog.json');
const userComment = require('./user-comment.json');

const seedDatabase = async (cb) =>{
    await sequelize.sync({force: true});
console.log(blogData)
    await User.bulkCreate (userData,{
        individualHooks: true,
    returning: true,
    });

    await Blog.bulkCreate(blogData, {
        individualHooks: true,
        returning: true,
    });

    await UserComment.bulkCreate(userComment,{
        individualHooks: true,
        returning: true,
    });
    cb();
};

module.exports = seedDatabase;
