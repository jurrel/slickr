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
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://i.redd.it/sf44frtqisny.jpg',
        caption: 'LOL',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'http://www.scubadivingcostarica.com/wp-content/uploads/2017/01/Puffd2.jpg',
        caption: 'Why you flexin?',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/654/65/70/green-turtle-maui-hawaii-wallpaper-preview.jpg',
        caption: 'Focus dude!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/655/617/276/sea-turtle-ocean-underwater-yellow-and-brown-fish-wallpaper-preview.jpg',
        caption: 'Leave me alone!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/919/575/783/nature-landscape-lake-mountains-wallpaper-preview.jpg',
        caption: 'So peaceful',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/948/147/675/dog-animals-siberian-husky-water-wallpaper-preview.jpg',
        caption: 'Walkin on water',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/355/306/413/animals-dog-%D1%85%D0%B0%D1%81%D0%BA%D0%B8-puppies-wallpaper-preview.jpg',
        caption: 'Can we keep em!?!?',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/440/336/892/dolphin-animals-wallpaper-preview.jpg',
        caption: 'Totsugeki!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/439/162/508/animals-whale-wallpaper-preview.jpg',
        caption: 'Great Yamada!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg',
        caption: 'So beautiful',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://a1.cdn.japantravel.com/photo/59307-199778/738x491.8798828125!/kanagawa-pikachu-outbreak-199778.jpg',
        caption: 'Eevee!!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/0FzFdqH3VIs3CutOvNE4BJ3NYjQICIY_kUgsjqpnUzIsYNvmwH6zI3-LlHKBxa8P16wjJEjr3JmLsxk9U63ka2Ez5vXLrdxPNrTqWqGXtI170JIk1VQ',
        caption: 'HIIIIIIIIIII!!!!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://lh3.googleusercontent.com/proxy/0FzFdqH3VIs3CutOvNE4BJ3NYjQICIY_kUgsjqpnUzIsYNvmwH6zI3-LlHKBxa8P16wjJEjr3JmLsxk9U63ka2Ez5vXLrdxPNrTqWqGXtI170JIk1VQ',
        caption: 'HIIIIIIIIIII!!!!',
        albumId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        imageUrl: 'https://pbs.twimg.com/media/DbEonLgVwAA0qJR.jpg',
        caption: 'Mae-e-pul-sul-tor-e Mae-e-pul-sul-tor-( i )',
        albumId: null,
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
