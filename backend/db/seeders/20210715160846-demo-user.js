"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      { //1
        email: "demo@user.io",
        firstName: "Demo",
        lastName: "User",
        username: "DemoUser",
        hashedPassword: bcrypt.hashSync('password'),
      },
      { //2
        email: "Totsugeki@guiltygear.com",
        firstName: "May",
        lastName: "JustMany",
        username: "LittlePrincess",
        hashedPassword: "$2a$12$IiaiBOY/fF.TYKyCcYJrG.jiSoA7H0KcLJje0FmVeAW8L4kX98inC",
      },
      { //3
        email: "FangBlade@maplestory.com",
        firstName: "Fang",
        lastName: "Blade",
        username: "FangBlade",
        hashedPassword: "$2a$12$tAig0Rr1tR5v3hx.44ik3uwaG6.FA//PRVQlkRQYkDPuKWGZ94apq",
      },
      { //4
        email: "Patrick@spongebob.com",
        firstName: "Patrick",
        lastName: "Star",
        username: "ThisIsPatrick",
        hashedPassword: "$2a$12$W.g80d9DhoraLmr06MfjouPphD5.p9fqUCLj8tfj1YPFN2pJ0jbBK",
      },
      { //5
        email: "Explosion@konosuba.com",
        firstName: "Megumin",
        lastName: "Megumin",
        username: "ArchWizardMegumin",
        hashedPassword: "$2a$12$AYFZBFNK3e4J65wpSN0EveNDJm8gom7XlLzib3CC1IdaR9KnKyT1S",
      },
      { //6
        email: "AllMight@UA.com",
        firstName: "Toshinori",
        lastName: "Yagi",
        username: "AllMight",
        hashedPassword: "$2a$12$zkFuH6O4tMi3aaxwYXo8nugdGkDNU9eft5XEVlpAN8pQ4o8tIY.jm",
      },
      { //7
        email: "Angel@angelbeats.com",
        firstName: "Kanade",
        lastName: "Tachibana",
        username: "Angel",
        hashedPassword: "$2a$12$zSg9DZ8vf2K91KvxzbUlQOUZVBCMKmwi5WbV986GdryvoMxZ1PDSK",
      },
      { //8
        email: "Zoro@gmail.com",
        firstName: "Roronoa ",
        lastName: "Zoro",
        username: "PirateHunter",
        hashedPassword: "$2a$08$AVKgqM/ysGc69DDyVrI8keCpcT4wbSpHShnD8buA9xupuygJfa1Jq",
      },
      { //9
        email: "Saitama@gmail.com",
        firstName: "Saitama ",
        lastName: "One",
        username: "CapedBaldy",
        hashedPassword: "$2a$08$OX8oDXAlbPoijjRX46R7VO.pZs/QibvyrAs3zH80gVfc0/DpK9fmO",
      },
      { //10
        email: "Rock@gmail.com",
        firstName: "Rock  ",
        lastName: "Lee",
        username: "LeafsHandsomeDevil",
        hashedPassword: "$2a$08$wUy971vHq11btg0ub6gs2eij4f14.p5QFp744BamosLvBh9v71Xrq",
      },
      { //11
        email: "Erina@gmail.com",
        firstName: "Erina",
        lastName: "Nakiri",
        username: "GodsTongue",
        hashedPassword: "$2a$08$UtgbDef72AMRz8AOco20LuujnDoWBctAegryMnCcKKbhSTXsw8u.m",
      },
      { //12
        email: "Naruto@gmail.com",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "7thHokage",
        hashedPassword: "$2a$08$jeMBb7WzYGUG.Z5cpOo/Wu3GVzoU7yJJYbTskEQg0zAdo27yB4lnK",
      },
      { //13
        email: "Invincible@gmail.com",
        firstName: "Markus ",
        lastName: "Grayson",
        username: "Invincible",
        hashedPassword: "$2a$08$2.XfTsIN4Fl5noscsNSv8uSoTCmBP781kFjV6q33AQV5PfDollWia",
      },
      { //14
        email: "Askeladd@gmail.com",
        firstName: "Thorfinn ",
        lastName: "Askeladd",
        username: "Karlsefni",
        hashedPassword: "$2a$08$bo.ksVGfjUXiK6utRYNB3.z7B6s.Yrr644wHD2kqIZVTIS43aU8eO",
      },
      {  //15
        email: "Edward@gmail.com",
        firstName: "Edward",
        lastName: "Elric",
        username: "LittleRedRunt",
        hashedPassword: "$2a$08$Zw6SYiGPjOTIbDWO8g1kaOtq8C7u6.0DZ8UhMYFJTlSVO/24nLKBK",
      },
      {  //16
        email: "Sasha@gmail.com",
        firstName: "Sasha",
        lastName: "Braus",
        username: "PotatoGirl",
        hashedPassword: "$2a$08$7Aiz92d7AN7532cyvPy9A.H6moSTvSq5BCB/5nFArsCWNU3On2uDS",
      },
      {  //17
        email: "Kyojuro@gmail.com",
        firstName: "Kyojuro",
        lastName: "Rengoku",
        username: "FlameHashira",
        hashedPassword: "$2a$08$i7NQGVmI/ablczFv96k89O7ewDZAtz6zDS7CtoexIn9.P3qZ.dyUm",
      },
      {  //18
        email: "Nezuko@gmail.com",
        firstName: "Nezuko",
        lastName: "Kamado",
        username: "ChibiDemon",
        hashedPassword: "$2a$08$lJWlIaX6dkHcz/XCubibbezl3pw7KaUashjRgV8MdlPzD8C9zvxka",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Users", {
      username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] }
    }, {});
  }
};