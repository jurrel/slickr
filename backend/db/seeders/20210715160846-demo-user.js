"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "demo@user.io",
        firstName: "Demo",
        lastName: "User",
        username: "DemoUser",
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: "Totsugeki@guiltygear.com",
        firstName: "May",
        lastName: "JustMany",
        username: "LittlePrincess",
        hashedPassword: "$2a$12$IiaiBOY/fF.TYKyCcYJrG.jiSoA7H0KcLJje0FmVeAW8L4kX98inC",
      },
      {
        email: "FangBlade@maplestory.com",
        firstName: "Fang",
        lastName: "Blade",
        username: "FangBlade",
        hashedPassword: "$2a$12$tAig0Rr1tR5v3hx.44ik3uwaG6.FA//PRVQlkRQYkDPuKWGZ94apq",
      },
      {
        email: "Patrick@spongebob.com",
        firstName: "Patrick",
        lastName: "Star",
        username: "ThisIsPatrick",
        hashedPassword: "$2a$12$W.g80d9DhoraLmr06MfjouPphD5.p9fqUCLj8tfj1YPFN2pJ0jbBK",
      },
      {
        email: "Explosion@konosuba.com",
        firstName: "Megumin",
        lastName: "Megumin",
        username: "ArchWizardMegumin",
        hashedPassword: "$2a$12$AYFZBFNK3e4J65wpSN0EveNDJm8gom7XlLzib3CC1IdaR9KnKyT1S",
      },
      {
        email: "AllMight@UA.com",
        firstName: "Toshinori",
        lastName: "Yagi",
        username: "AllMight",
        hashedPassword: "$2a$12$zkFuH6O4tMi3aaxwYXo8nugdGkDNU9eft5XEVlpAN8pQ4o8tIY.jm",
      },
      {
        email: "Angel@angelbeats.com",
        firstName: "Kanade",
        lastName: "Tachibana",
        username: "Angel",
        hashedPassword: "$2a$12$zSg9DZ8vf2K91KvxzbUlQOUZVBCMKmwi5WbV986GdryvoMxZ1PDSK",
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