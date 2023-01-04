const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
  {
    post_topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    
  },
  
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }
);

module.exports = Post;