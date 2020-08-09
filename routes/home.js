const express = require("express");
const homeRouter = express.Router();

const { asyncHandler, getS3Url } = require("../utils");

homeRouter.get(
  "/pics",
  asyncHandler(async (req, res, next) => {
    const magicNumber = 5;

    const homePics = [];

    for (let i = 1; i <= magicNumber; i++) {
      let url = await getS3Url(`home/home (${i}).jpg`);
      homePics.push(url);
    }

    console.log(homePics);

    res.json(homePics);
  })
);

module.exports = homeRouter;
