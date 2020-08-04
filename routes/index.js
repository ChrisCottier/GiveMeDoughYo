const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const campaignsRouter = require("./campaigns");

router.use(`/users`, usersRouter);
router.use("/campaigns", campaignsRouter);

module.exports = router;
