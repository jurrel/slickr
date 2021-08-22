'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    caption: DataTypes.TEXT,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING,
  }, {});
  Photo.associate = function (models) {

    const columnMapping = {
      through: 'ManyTag',
      otherKey: 'tagId',
      foreignKey: 'photoId'
    }

    Photo.belongsToMany(models.Tag, columnMapping);
    Photo.hasMany(models.Comment, { foreignKey: 'photoId', onDelete: "cascade", hooks: true })
    Photo.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Photo;
};