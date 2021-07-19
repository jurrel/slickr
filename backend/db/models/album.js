'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users'
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.hasMany(models.Photo, { foreignKey: 'photoId' })
    Album.belongsTo(models.User, { foreignKey: 'userId' })

  };
  return Album;
};