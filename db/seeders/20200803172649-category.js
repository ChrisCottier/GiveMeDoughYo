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
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Photography",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Education",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion & Wearables",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Food & Beverage",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Health & Fitness",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Home",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Technology",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Transportation",
        field: "tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Art",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Comics",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Film",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Music",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Podcasts, Blogs, Vlogs",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Video Games",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "TV Shows",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Writing",
        field: "creative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Culture",
        field: "community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Environment",
        field: "community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wellness",
        field: "community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Human Rights",
        field: "community",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Local Business",
        field: "community",
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
