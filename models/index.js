const User = require('./users')
const Blog = require('./blog');
const UserComment = require ('./user_comment');



User.hasMany(Blog,{
});

Blog.belongsTo(User,{
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

UserComment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Blog.hasMany(UserComment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});


module.exports = {User, Blog, UserComment};