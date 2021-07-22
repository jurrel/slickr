'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: 'ManyTag',
      otherKey: 'photoId',
      foreignKey: 'tagId'
    }

    Tag.belongsToMany(models.Photo, columnMapping);
  };
  return Tag;
};