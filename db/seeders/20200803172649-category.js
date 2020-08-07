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
    // {
    //   name: "Science",
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
    return queryInterface.bulkInsert("Categories", [
      {
        name: "Audio",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photography",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Education",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Food and Beverage",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Health and Fitness",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Home",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Technology",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Transportation",
        field: "Tech and Innovation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Art",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Comics",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Film",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Music",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Podcasts and Blogs",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Video Games",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TV Shows",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Writing",
        field: "Creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Culture",
        field: "Community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Environment",
        field: "Community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wellness",
        field: "Community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Local Business",
        field: "Community",
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
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
