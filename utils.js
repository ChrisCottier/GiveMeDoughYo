const expressValidator = require("express-validator");
const { check, validationResult } = expressValidator;

const AWS = require("aws-sdk");
const { awsKeys } = require("./config");
const { accessKeyId, secretAccessKey } = awsKeys;
AWS.config = new AWS.Config();
AWS.config.accessKeyId = accessKeyId;
AWS.config.secretAccessKey = secretAccessKey;
const S3 = new AWS.S3({
  endpoint: "s3.us-east-2.amazonaws.com",
  signatureVersion: "v4",
  region: "us-east-2",
});

const getS3Url = async (key) => {
  return S3.getSignedUrl("getObject", {
    Bucket: "indiegogo-clone",
    Key: key,
  });
};

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const hasPerk = (amount, campaign) => {
  let newPerk = null;
  let cost = 0;

  for (let i = 1; i <= 5; i++) {
    let perkCost = `perk${i}Cost`;
    let perk = `perk${i}`;

    if (amount > campaign[perkCost] && campaign[perk] && campaign[perkCost] > cost) {
      newPerk = campaign[perk];
      cost = campaign[perkCost]
    }
  }

  return newPerk;
};

// console.log(hasPerk(101, sample))
module.exports = {
  asyncHandler,
  getS3Url,
  hasPerk,
  S3,
};
