const User = require('./users')
const Post = require('./posts');
const UserComment = require ('./user_comment');
// const { post } = require('../controllers');


// User.hasMany(Post,{
// });

Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


// User.hasMany(UserComment,{
//     foreignKey: 'user_id',
//     onDelete:""
// });

UserComment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

UserComment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Post.hasMany(UserComment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});


module.exports = {User, Post, UserComment};