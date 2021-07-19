'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: {
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      },
    },
    photoId: {
      type: DataTypes.INTEGER,
      references: { model: 'photoId' }
    }
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Photo, { foreignKey: 'photoId' })
  };
  return Comment;
};