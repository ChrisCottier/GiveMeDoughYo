"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Demo",
        lastName: "del Demo",
        email: "demo@gmail.com",
        hashedPassword:
          "$2a$08$uJ6MSmKT3O008tMBup4Xi.4y34onw45awvn.6HZHsDcmBY4Y4W.jS",
        city: "Chicago",
        stateProvince: "Illinois",
        country: "United States",
        shortDescription:
          "I didn't feel like making a new account, so here I am!",
        aboutMe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a neque scelerisque nisi semper viverra. Donec ac faucibus leo. Praesent eu eleifend urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ultricies mauris libero, in congue mauris malesuada ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere elementum tellus, non imperdiet tellus facilisis quis. Proin auctor eu lectus vitae ultrices. Etiam luctus in nisl eu ullamcorper. Cras porttitor condimentum lacus sit amet dictum. Sed et luctus nulla, vitae tempor nulla. In sit amet consectetur felis. Donec ornare at nibh sed accumsan. Donec blandit est vel quam gravida aliquet. Nam urna justo, dictum sed bibendum vitae, tincidunt id tortor.",
        balance: 1000000,
        profilePic: "seed/profile-pic/20190517_102834.jpg",
        avatar: "seed/avatar/20190517_105933.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
