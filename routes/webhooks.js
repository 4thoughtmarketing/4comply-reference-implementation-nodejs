var express = require("express");
var router = express.Router();

/**
 * Respond to RTA Webhooks for all regulations
 */
router.get("/rta", function(req, res, next) {
  let data = req.body;
  let regulation = getRegulation(data);

  res.send("respond with a resource");
});

/**
 * Respond to RTP Webhooks for all regulations
 */
router.get("/rtp", function(req, res, next) {
  let data = req.body;
  let regulation = getRegulation(data);

  res.send("respond with a resource");
});

/**
 * Respond to RTU webhooks for all regulations
 */
router.get("/rtu", function(req, res, next) {
  let data = req.body;
  let regulation = getRegulation(data);

  res.send("respond with a resource");
});

/**
 * Respond to RTBF webhooks for all regulations
 */
router.get("/rtbf", function(req, res, next) {
  let data = req.body;
  let regulation = getRegulation(data);

  res.send("respond with a resource");
});

module.exports = router;
