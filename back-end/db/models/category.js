"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique,
      },
    },
    {}
  );
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Interest, { foreignKey: "categoryId" });
    Category.hasMany(models.Campaign, { foreignKey: "categoryId" });
  };
  return Category;
};
