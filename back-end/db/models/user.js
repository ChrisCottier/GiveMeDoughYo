"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.STRING(255),
      },
      aboutMe: {
        type: DataTypes.TEXT,
      },
      balance: {
        type: DataTypes.INTEGER,
        defaultValue: 50000,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
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
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Interest, { foreignKey: "userId" });
    User.hasMany(models.Contribution, { foreignKey: "userId" });
    User.hasMany(models.Campaign, { foreignKey: "userId" });
    User.hasMany(models.Follow, { foreignKey: "userId" });
    User.hasMany(models.Comment, { foreignKey: "userId" });
  };
  return User;
};
