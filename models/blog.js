const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model { }

Blog.init(
  {
    blog_topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blog_body: {
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
  },
  {
  
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Blog',
  }
);

module.exports = Blog;