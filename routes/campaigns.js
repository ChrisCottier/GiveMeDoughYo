const express = require("express");
const campaignsRouter = express.Router();
const { Sequelize } = require("../db/models/index");
const { Op } = Sequelize;

const {
  User,
  Campaign,
  Follow,
  Contribution,
  Category,
} = require("../db/models");
const { asyncHandler, getS3Url } = require("../utils");

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

    const campaignPic = await getS3Url(campaignData.campaignPic);
    campaignData.campaignPic = campaignPic;
    console.log(campaignData);

    res.json(campaignData);
  })
);

campaignsRouter.get(
  "/search/:category/:query",
  asyncHandler(async (req, res, next) => {
    console.log("searching db");
    const { category, query } = req.params;

    let matchingCampaigns = [];

    if (category === "all") {
      matchingCampaigns = await Campaign.findAll({
        where: {
          [Op.or]: {
            title: {
              [Op.iLike]: `%${query}%`,
            },
            tagline: {
              [Op.iLike]: `%${query}%`,
            },
            story: {
              [Op.iLike]: `%${query}%`,
            },
          },
        },
      });
      for (let campaign of matchingCampaigns) {
        let campaignPic = getS3Url(campaign.campaignPic);
        campaign.campaignPic = campaignPic;
      }
    } else {
    }

    res.json(matchingCampaigns);
  })
);

module.exports = campaignsRouter;
