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

module.exports = {
  asyncHandler,
  getS3Url,
};
