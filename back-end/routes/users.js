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
    const userId = user.id;
    res.json({ userId, token });
  })
);

usersRouter.post(
  "/login",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    let validPassword = false;
    if (user) {
      validPassword = bcrypt.compareSync(
        password,
        user.hashedPassword.toString()
      );
    }

    if (!user || !validPassword) {
      res.ok = false;
      res.status(401);
      res.json({ message: "The provided credentials were invalid." });
    } else {
      const token = generateUserToken(user);

      const userId = user.id;
      res.json({ userId, token });
    }
  })
);

usersRouter.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const userData = await User.findByPk(id);
    console.log(userData);

    res.json(userData);
  })
);

module.exports = usersRouter;
