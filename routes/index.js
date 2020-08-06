const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const campaignsRouter = require("./campaigns");
const contributionsRouter = require("./contributions");

router.use(`/users`, usersRouter);
router.use("/campaigns", campaignsRouter);
router.use("/contributions", contributionsRouter);

module.exports = router;
