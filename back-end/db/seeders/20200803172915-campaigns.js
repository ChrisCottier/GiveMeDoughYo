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
    return queryInterface.bulkInsert("Campaigns", [
      {
        title: "Sample",
        tagline: "Now that's what I call a sample campaign!",
        categoryId: 1,
        userId: 1,
        duration: 50,
        campaignPic: "",
        otherPics: ["yo"],
        story:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a neque scelerisque nisi semper viverra. Donec ac faucibus leo. Praesent eu eleifend urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ultricies mauris libero, in congue mauris malesuada ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere elementum tellus, non imperdiet tellus facilisis quis. Proin auctor eu lectus vitae ultrices. Etiam luctus in nisl eu ullamcorper. Cras porttitor condimentum lacus sit amet dictum. Sed et luctus nulla, vitae tempor nulla. In sit amet consectetur felis. Donec ornare at nibh sed accumsan. Donec blandit est vel quam gravida aliquet. Nam urna justo, dictum sed bibendum vitae, tincidunt id tortor.",
        contactEmail: "demo@gmail.com",
        campaignGoal: 10000,
        currentTotal: 700,
        urlPath: "sample",
        perk1Cost: 10,
        perk1: "old boot",
        perk2Cost: 20,
        perk2: "fish",
        perk3Cost: 50,
        perk3: "a sandwich",
        perk4Cost: 77,
        perk4: "rusty spoon",
        perk5Cost: 100,
        perk5: "99 red baloons",
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
    return queryInterface.bulkDelete("Campaigns", null, {});
  },
};
