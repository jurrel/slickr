'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photos', [
      {
        userId: 1,
        imageUrl: 'https://live.staticflickr.com/4351/35838968603_388e8dd585_k.jpg',
        caption: 'How are we suppose to get across?',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://live.staticflickr.com/65535/49357221288_88dc87154c_h.jpg',
        caption: 'Is this what Santa does when he\'s not delivering presents',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://live.staticflickr.com/5823/21575792756_b926bd837c_b.jpg',
        caption: 'Monkey!!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://live.staticflickr.com/2574/4146446253_06e56b48da_b.jpg',
        caption: 'Speechless',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://i.redd.it/sf44frtqisny.jpg',
        caption: 'LOL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'http://www.scubadivingcostarica.com/wp-content/uploads/2017/01/Puffd2.jpg',
        caption: 'Why you flexin?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
