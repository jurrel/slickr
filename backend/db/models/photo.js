'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    caption: {
      type: DataTypes.TEXT
    },
    albumId: {
      type: DataTypes.INTEGER
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Photo.associate = function (models) {
    // associations can be defined here

    Photo.hasMany(models.Comment, { foreignKey: 'photoId' })
    Photo.hasMany(models.Tag, { foreignKey: 'photoId' })
    Photo.belongsTo(models.User, { foreignKey: 'userId' })
    Photo.belongsTo(models.Album, { foreignKey: 'photoId' })

  };
  return Photo;
};