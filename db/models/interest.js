"use strict";
module.exports = (sequelize, DataTypes) => {
  const Interest = sequelize.define(
    "Interest",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
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
  Interest.associate = function (models) {
    // associations can be defined here
    Interest.belongsTo(models.User, { foreignKey: "userId" });
    Interest.belongsTo(models.Category, { foreignKey: "categoryId" });
  };
  return Interest;
};
