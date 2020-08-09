const express = require("express");
const homeRouter = express.Router();

const { asyncHandler, getS3Url } = require("../utils");

const { Campaign, Category } = require("../db/models");

homeRouter.get(
  "/pics",
  asyncHandler(async (req, res, next) => {
    const magicNumber = 5;

    const homePics = [];

    for (let i = 1; i <= magicNumber; i++) {
      let url = await getS3Url(`home/home (${i}).jpg`);
      homePics.push(url);
    }

    const newCampaigns = await Campaign.findAll({
      order: [["createdAt", "ASC"]],
      limit: 4,
      include: { model: Category },
    });

    for (let campaign of newCampaigns) {
      campaign.campaignPic = await getS3Url(campaign.campaignPic);
      campaign.story = null;
    }

    const mostBacked = await Campaign.findAll({
      order: [["currentTotal", "DESC"]],
      limit: 4,
      include: { model: Category },
    });

    console.log(mostBacked);

    for (let campaign of mostBacked) {
      campaign.campaignPic = await getS3Url(campaign.campaignPic);
      campaign.story = null;
    }

    res.json({ homePics, newCampaigns, mostBacked });
  })
);

module.exports = homeRouter;
