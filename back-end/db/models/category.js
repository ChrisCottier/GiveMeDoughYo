"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING(50),
    },
    {}
  );
  Category.associate = function (models) {
    // associations can be defined here
  };
  return Category;
};
