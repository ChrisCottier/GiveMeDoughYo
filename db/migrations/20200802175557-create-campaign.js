"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Campaigns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      tagline: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Categories" },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      campaignPic: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      otherPics: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      story: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      contactEmail: {
        type: Sequelize.STRING(100),
      },
      campaignGoal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentTotal: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      urlPath: {
        type: Sequelize.STRING,
      },
      perk1Cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      perk1: {
        type: Sequelize.STRING(100),
      },
      perk2Cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      perk2: {
        type: Sequelize.STRING(100),
      },
      perk3Cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      perk3: {
        type: Sequelize.STRING(100),
      },
      perk4Cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      perk4: {
        type: Sequelize.STRING(100),
      },
      perk5Cost: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      perk5: {
        type: Sequelize.STRING(100),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Campaigns");
  },
};
