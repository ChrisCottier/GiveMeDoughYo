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
  };

  const token = jwt.sign({ data: userDataForToken }, secret, {
    expiresIn: parseInt(expiresIn, 10),
  });

  return token;
};

const requireAuth = (req, res, next) => {
  //DOES WHAT: this function checks to see if a user has is logged in (has a token). If yes, it will pass on their user instance to req. If not, it will direct the user to login.
  //WHEN TO RUN: When it is necessary to have an authenticated, logged in user for a request.
  //WHERE TO RUN IT: this is a middleware. run it before route.
  console.log(req.token);

  const token = req.token;

  if (!token) {
    //TODO this should be redirect or prompt modal popup for login
    const error = new Error("You must be logged in to see this page");
    res.status(401);
    res.json({ message: "Invalid Token" });
    return;
  }

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      err.status = 401;
      return next(err);
    }

    const { id } = jwtPayload.data;

    try {
      req.user = await User.findByPk(id);
    } catch (err) {
      return next(err);
    }

    if (!req.user) {
      const error = new Error("You must be logged in to see this page");
      res.status(401);
      res.json({ message: "Invalid Token" });
      return;
    }
    return next();
  });
};

module.exports = {
  generateUserToken,
  requireAuth,
};
