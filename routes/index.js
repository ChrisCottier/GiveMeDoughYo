const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const campaignsRouter = require("./campaigns");
const contributionsRouter = require("./contributions");
const categoriesRouter = require("./categories");
const followsRouter = require("./follows");
const homeRouter = require("./home");

router.use(`/users`, usersRouter);
router.use("/campaigns", campaignsRouter);
router.use("/contributions", contributionsRouter);
router.use("/categories", categoriesRouter);
router.use("/follows", followsRouter);
router.use("/home", homeRouter);

module.exports = router;
