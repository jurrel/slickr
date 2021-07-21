'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManyTag = sequelize.define('ManyTag', {
    tagId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  ManyTag.associate = function (models) {
    // associations can be defined here
  };
  return ManyTag;
};