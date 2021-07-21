'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    photoId: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    // Album.hasMany(models.Photo, { foreignKey: 'photoId' })
    Album.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Album;
};