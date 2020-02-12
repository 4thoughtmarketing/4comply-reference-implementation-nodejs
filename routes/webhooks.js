var express = require("express");
var router = express.Router();

/**
 * Respond to RTP Webhooks for all regulations
 */
router.get("/rtp", function(req, res, next) {
  let data = req.body;

  let regulation = getRegulation(data.regulation_id);
  let regulationName = regulation.name;
  let email = data.email;
  let requestId = data.right_request_id;
  let stepName = data.step_name;
  let nextStepName = data.next_step_name;

  let responseObj = {};

  // Based on the step name and regulation name, we can take proper action

  // EXAMPLE 
  // Step Response -> RTPReadyToFulfillWebhook : GDPR
  if (regulationName === "GDPR" && stepName === "RTPReadyToFulfillWebhook") {
    // Now, we can start fulfilling our RTP request
    
    // Get information from salesforce:

    // This needs to be a file.  For RTP any file type is allowed but for RTA and RTU, it needs to be a flat JSON file in order to allow users to update and view their data
    let sfFileBlob = await salesforceConnector.getDataFile(email);

    // Upload to 4Comply:
    await uploadDataTo4Comply(requestId, stepName, sfFileBlob);
    // Let's assume this is all the data we need to upload.  Let's mark this step as complete.
    await goToNextStep(requestId, nextStepName);
    responseObj = {success: true};
  }

  // Respond to the webhook with a success message to be stored with the Right Request.
  res.send(responseObj);
});

/**
 * Respond to a new Consent Entry
 */
router.get("/consent", function(req,res,next) {
  let data = req.body;

  let emailAddress = data.email_address; // email of person who just gave their consent
  let consentValue = data.consent_code; // "true" or "false"

  // Update consent value in salesforce (just an example action we can take)
  await salesforceConnector.updateUserData(data);

  res.send({success: true});
});

const salesforceConnector = {
  getDataFile: async () => {
    await setTimeout(2000);
    return {
      data: "salesforce data string"
    }
  },
  updateUserData: async (data) => {
    await setTimeout(2000);
    return {
      data: "salesforce data string"
    }
  }
};


module.exports = router;
