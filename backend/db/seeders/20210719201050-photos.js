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
       imageUrl: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
       caption: 'The good old days',
       albumId: null,
       title: 'Chillin with da boyz',
       createdAt: new Date(),
       updatedAt: new Date(),
      },
      {
        userId: 6,
        imageUrl: 'https://images.unsplash.com/photo-1542875272-2037d53b5e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        caption: 'Winning Love by Daylight',
        albumId: null,
        title: 'Fighting Evil by Moonlight',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1502101872923-d48509bff386?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
        caption: 'The first step is always the hardest',
        albumId: null,
        title: 'Baby vs Stairs!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://live.staticflickr.com/5823/21575792756_b926bd837c_b.jpg',
        caption: 'Monkey!!',
        albumId: null,
        title: 'Monkey in forest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: 'Insert your own inspirational quote here...',
        albumId: null,
        title: 'Passion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://i.redd.it/sf44frtqisny.jpg',
        caption: 'LOL',
        albumId: null,
        title: 'SQUISHY',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'http://www.scubadivingcostarica.com/wp-content/uploads/2017/01/Puffd2.jpg',
        caption: null,
        albumId: null,
        title: 'Why you flexin?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/655/617/276/sea-turtle-ocean-underwater-yellow-and-brown-fish-wallpaper-preview.jpg',
        caption: 'I wonder if the turtle can ever sleep with all those kids',
        albumId: null,
        title: 'Family man',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/919/575/783/nature-landscape-lake-mountains-wallpaper-preview.jpg',
        caption: 'So peaceful',
        albumId: null,
        title: 'Behold',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        caption: 'Breakfast is the most important meal of the day',
        albumId: null,
        title: 'Bluburry!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/948/147/675/dog-animals-siberian-husky-water-wallpaper-preview.jpg',
        caption: 'How does the wolf do it?',
        albumId: null,
        title: 'Walkin on water',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/355/306/413/animals-dog-%D1%85%D0%B0%D1%81%D0%BA%D0%B8-puppies-wallpaper-preview.jpg',
        caption: 'Pretty please!?',
        albumId: null,
        title: 'Can we keep em!?!?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/440/336/892/dolphin-animals-wallpaper-preview.jpg',
        caption: 'Totsugeki!',
        albumId: null,
        title: 'Totsugeki!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg',
        caption: 'So beautiful',
        albumId: null,
        title: 'Sun set',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        imageUrl: 'https://a1.cdn.japantravel.com/photo/59307-199778/738x491.8798828125!/kanagawa-pikachu-outbreak-199778.jpg',
        caption: 'Need a perfect IV EEVEE',
        albumId: null,
        title: 'EEVEE FARM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/439/162/508/animals-whale-wallpaper-preview.jpg',
        caption: 'I can speak whale',
        albumId: null,
        title: 'Great Yamada!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        imageUrl: 'https://c1.wallpaperflare.com/preview/854/291/622/city-pavement-dancer-dancing.jpg',
        caption: 'Learning how to dance',
        albumId: null,
        title: 'Air FLARE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 11,
        imageUrl: 'https://coed.com/wp-content/uploads/2016/10/gettyimages-586879354.jpg',
        caption: 'IT IS A PIKACHU!!',
        albumId: null,
        title: 'PIIII KAAA CHUU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://pbs.twimg.com/media/DbEonLgVwAA0qJR.jpg',
        caption: 'Mae-e-pul-sul-tor-e Mae-e-pul-sul-tor-( i )',
        albumId: null,
        title: 'Best Life',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/655/92/9/concert-dance-disco-dubstep-wallpaper-preview.jpg',
        caption: 'A night to remember',
        albumId: null,
        title: 'BEHOLD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 13,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/10/615/827/dj-martin-garrix-wallpaper-preview.jpg',
        caption: 'BACK STAGE BABY! WOOT WOOT!',
        albumId: null,
        title: 'HIGH ON LIFE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 15,
        imageUrl: 'https://pbs.twimg.com/media/DhtOKYuXcAAkLQ5?format=jpg&name=large',
        caption: 'I HOPE HE IS FUNDED',
        albumId: null,
        title: 'Dexless Theif',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/644/757/64/animal-cat-cute-cat-kitten-wallpaper-preview.jpg',
        caption: 'I think my cat is a super hero',
        albumId: null,
        title: 'Rawr',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 11,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/386/596/1000/nature-landscape-road-trees-wallpaper-preview.jpg',
        caption: "Day's like these that I makes me appreciate life",
        albumId: null,
        title: 'The Road Less Traveled',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        imageUrl: 'https://c4.wallpaperflare.com/wallpaper/800/81/121/women-model-brunette-cow-wallpaper-preview.jpg',
        caption: 'Me vs Cow! WHO WILL WIN!',
        albumId: null,
        title: 'The Great Battle',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        imageUrl: 'https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: null,
        albumId: null,
        title: 'Mountains!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 18,
        imageUrl: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        caption: null,
        albumId: null,
        title: 'Doughnut',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 16,
        imageUrl: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: "Words cannot describe this",
        albumId: null,
        title: 'Speechless',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://i.imgur.com/IG2V7eI.jpeg',
        caption: null,
        albumId: null,
        title: "WHO'S THAT POKEMON!?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        caption: null,
        albumId: null,
        title: "WHAT ARE THOSE!?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1562714529-94d65989df68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
        caption: "Blu just looks like a good boy....",
        albumId: null,
        title: "Who's a good boy?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1625601703646-74e4228486f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: "This is a banger!",
        albumId: null,
        title: "Banger",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: "Welcome to the darkside",
        albumId: null,
        title: "Banger",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 11,
        imageUrl: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=782&q=80',
        caption: "Need more nights like these",
        albumId: null,
        title: "Mood",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        imageUrl: 'https://images.unsplash.com/photo-1502035618526-6b2f1f5bca1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: "BURFDAY",
        albumId: null,
        title: "EXPLOOOSION",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1586622917703-ec1048fd58bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        caption: "I wonder if it can breath fire",
        albumId: null,
        title: "Dragon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        imageUrl: 'https://images.unsplash.com/photo-1599790772272-d1425cd3242e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        caption: "Floating seems like a cool ability",
        albumId: null,
        title: "Conflicted",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        imageUrl: 'https://images.unsplash.com/photo-1580176341431-e9ec5593558c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption: "I'll leave tomorrow's problems to tomorrow's me -Saitama",
        albumId: null,
        title: "Deep in thought",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
