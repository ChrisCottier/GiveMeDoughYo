const jwt = require("jsonwebtoken");
const { jwtConfig } = require("./config");
const { secret, expiresIn } = jwtConfig;
const { User } = require("./db/models");

const generateUserToken = (user) => {
  //DOES WHAT: generates a token for a user
  //WHEN TO RUN: run it during account creation, login, or token refreshing.
  //WHERE TO RUN IT: this should be ran in the signup and login routes. it can also be ran in a refresh middleware function.
  const userDataForToken = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  const token = jwt.sign({ data: userDataForToken }, secret, {
    expiresIn: parseInt(expiresIn, 10),
  });

  return token;
};

module.exports = {
  generateUserToken,
};
