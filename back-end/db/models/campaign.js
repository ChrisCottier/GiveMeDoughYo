"use strict";
module.exports = (sequelize, DataTypes) => {
  const Campaign = sequelize.define(
    "Campaign",
    {
      title: {
        type: DataTypes.STRING(75),
        allowNull: false,
        unique: true,
      },
      tagline: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      campaignPic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      otherPics: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      story: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contactEmail: {
        type: DataTypes.STRING(100),
      },
      campaignGoal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      currentTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      urlPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      perk1Cost: {
        type: DataTypes.INTEGER,
      },
      perk1: {
        type: DataTypes.STRING(100),
      },
      perk2Cost: {
        type: DataTypes.INTEGER,
      },
      perk2: {
        type: DataTypes.STRING(100),
      },
      perk3Cost: {
        type: DataTypes.INTEGER,
      },
      perk3: {
        type: DataTypes.STRING(100),
      },
      perk4Cost: {
        type: DataTypes.INTEGER,
      },
      perk4: {
        type: DataTypes.STRING(100),
      },
      perk5Cost: {
        type: DataTypes.INTEGER,
      },
      perk5: {
        type: DataTypes.STRING(100),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Campaign.associate = function (models) {
    // associations can be defined here
    Campaign.belongsTo(models.Category, { foreignKey: "categoryId" });
    Campaign.belongsTo(models.User, { foreignKey: "userId" });
    Campaign.hasMany(models.Contribution, { foreignKey: "campaignId" });
    Campaign.hasMany(models.Follow, { foreignKey: "campaignId" });
    Campaign.hasMany(models.Comment, { foreignKey: "campaignId" });
  };
  return Campaign;
};
