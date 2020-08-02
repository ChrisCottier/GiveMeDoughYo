"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contribution = sequelize.define(
    "Contribution",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      perk: {
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
  Contribution.associate = function (models) {
    // associations can be defined here
    Contribution.belongsTo(models.User, { foreignKey: "userId" });
    Contribution.belongsTo(models.Campaign, { foreignKey: "campaignId" });
  };
  return Contribution;
};
