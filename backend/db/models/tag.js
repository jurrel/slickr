'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: 'ManyTag',
      otherKey: 'photoId',
      foreignKey: 'tagId'
    }

    Tag.belongsToMany(models.Post, columnMapping);
  };
  return Tag;
};