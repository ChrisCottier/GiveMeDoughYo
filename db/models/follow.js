"use strict";
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define(
    "Follow",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      campaignId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
  Follow.associate = function (models) {
    // associations can be defined here
    Follow.belongsTo(models.User, { foreignKey: "userId" });
    Follow.belongsTo(models.Campaign, { foreignKey: "campaignId" });
  };
  return Follow;
};
