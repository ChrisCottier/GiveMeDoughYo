const express = require("express");
const campaignsRouter = express.Router();

const {
  User,
  Campaign,
  Follow,
  Contribution,
  Category,
} = require("../db/models");
const { asyncHandler } = require("../utils");

campaignsRouter.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const campaignData = await Campaign.findByPk(id, {
      include: [
        { model: User },
        { model: Contribution },
        { model: Follow },
        { model: Category },
      ],
    });

    res.json(campaignData);
  })
);

module.exports = campaignsRouter;
