const express = require("express");
const usersRouter = express.Router();
const bcrypt = require("bcryptjs");

const { User } = require("../db/models");
const { asyncHandler } = require("../utils");
const { generateUserToken } = require("../auth");

usersRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { firstName, lastName, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
      firstName,
      lastName,
      hashedPassword,
      email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    //Give User token

    const token = generateUserToken(user);

    res.json(token);
  })
);

module.exports = usersRouter;
