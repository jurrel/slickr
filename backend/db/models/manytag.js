'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManyTag = sequelize.define('ManyTag', {
    tagId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  ManyTag.associate = function (models) {
    // associations can be defined here
  };
  return ManyTag;
};