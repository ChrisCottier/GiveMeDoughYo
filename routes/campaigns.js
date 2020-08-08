const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
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
const { asyncHandler, getS3Url, S3 } = require("../utils");
const { requireAuth } = require("../auth");

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

    res.json(campaignData);
  })
);

campaignsRouter.get(
  "/search/:category/:query",
  asyncHandler(async (req, res, next) => {
    const { category, query } = req.params;

    let matchingCampaigns = [];

    if (category === "all") {
      matchingCampaigns = await Campaign.findAll({
        include: { model: Category },
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
        limit: 40,
      });
      for (let campaign of matchingCampaigns) {
        let campaignPic = await getS3Url(campaign.campaignPic);
        campaign.campaignPic = campaignPic;
        campaign.story = null;
      }
    } else {
    }

    res.json(matchingCampaigns);
  })
);

campaignsRouter.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res, next) => {
    console.log("posting");

    const { campaign } = req.body;

    campaign.createdAt = new Date();
    campaign.updatedAt = new Date();
    campaign.duration = Math.floor(Number.parseInt(campaign.duration));
    campaign.campaignGoal = Math.floor(Number.parseInt(campaign.campaignGoal));
    for (let i = 1; i <= 5; i++) {
      let perkCost = `perk${i}Cost`;
      if (campaign[perkCost]) {
        campaign[perkCost] = Math.floor(Number.parseInt(campaign[perkCost]));
      } else {
        campaign[perkCost] = 0;
      }
    }
    const newCampaign = await Campaign.create(campaign);
    console.log(newCampaign);

    res.json(newCampaign);
  })
);

const upload = multer({
  storage: multerS3({
    s3: S3,
    bucket: "indiegogo-clone",
    key: function (req, file, cb) {
      console.log(req);
      console.log(file);
      cb(null, `${new Date()}${file.originalname}`);
    },
  }),
});

campaignsRouter.post(
  "/:id(\\d+)/campaignPic",
  requireAuth,
  upload.single("campaignPic"),
  asyncHandler(async (req, res, next) => {
    console.log(req.file);
    const { id } = req.params;
    console.log(id);

    if (!req.file.key) {
      console.log("failed upload");
      res.json("ow");
    }

    const campaignPic = req.file.key;

    const campaign = await Campaign.findByPk(id);
    if (campaign.userId !== req.user.id) {
      console.log("not authorized");
      res.json("ow");
    }

    campaign.campaignPic = campaignPic;

    await campaign.save();

    res.json(campaign);
  })
);

module.exports = campaignsRouter;
