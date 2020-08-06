const express = require("express");
const contributionsRouter = express.Router();

const { User, Campaign, Contribution } = require("../db/models");
const { asyncHandler, hasPerk } = require("../utils");
const { requireAuth } = require("../auth");

contributionsRouter.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    const user = req.user;
    const { amount, campaignId } = req.body;

    let contributor = await User.findByPk(user.id);
    let campaign = await Campaign.findByPk(campaignId);

    if (user.balance < amount || amount <= 0) {
      res.status(400);
      res.ok = false;
      res.json({ message: "Not enough in balance to complete contriution" });
      return;
    }

    contributor.balance -= amount;
    campaign.currentTotal += amount;

    const perk = hasPerk(amount, campaign);

    const contribution = await Contribution.create({
      userId: contributor.id,
      campaignId: campaign.id,
      amount: amount,
      perk,
    });
    await contributor.save();
    await campaign.save();

    res.json(contribution);
  })
);

module.exports = contributionsRouter;
