const express = require("express");
const followsRouter = express.Router();

const { User, Campaign, Contribution, Follow } = require("../db/models");
const { asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");

followsRouter.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const { userId, campaignId } = req.body;

    let follow = await Follow.findOne({
      where: {
        userId: userId,
        campaignId: campaignId,
      },
    });
    let followStatus;
    if (follow) {
      await follow.destroy();
      followStatus = false;
    } else {
      await Follow.create({
        userId,
        campaignId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      followStatus = true;
    }
    res.json({ campaignId, followStatus });
  })
);

module.exports = followsRouter;
