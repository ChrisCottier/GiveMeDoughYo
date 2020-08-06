const express = require("express");
const categoriesRouter = express.Router();

const { Category } = require("../db/models");

const { asyncHandler } = require("../utils");
const campaignsRouter = require("./campaigns");
campaignsRouter.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const categories = await Category.findAll();

    res.json(categories);
  })
);

module.exports = campaignsRouter;
