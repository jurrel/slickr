'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Comments",
      [
        {
          userId: 2,
          photoId: 5,
          comment: "So Cute!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          photoId: 4,
          comment: "Test Comment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          photoId: 5,
          comment: "Poke!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
