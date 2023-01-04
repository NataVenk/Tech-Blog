const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserComment extends Model { }

UserComment.init(
    {
      
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "post",
            key: "id",
           
        }
      },
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        
        },
      
    },
    
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'usercomment',
    }
  );
  
  module.exports = UserComment;