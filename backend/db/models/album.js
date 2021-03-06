'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Album.associate = function (models) {
 
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    const columnMapping = {
      through: 'AlbumPhoto',
      otherKey: 'photoId',
      foreignKey: 'albumId'
    }
    Album.belongsToMany(models.Photo, columnMapping)

  };
  return Album;
};