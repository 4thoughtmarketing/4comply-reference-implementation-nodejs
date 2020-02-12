# 4Comply Reference Implementation

### This document and code repository aims to serve as a sample implementation for the 4Comply API.

A real world application may have many other systems integrated, but it will likely use the same few API calls to the 4Comply API, which we have implemented here.

This sample app is written in Javascript (Node.js + Express)

## Webhooks - Right Requests

The 4Comply Reference Implementation uses Webhooks (sent from 4Comply) in order to perform actions along the path of a user's Right Request.

To accomplish this, this implementation uses a webhook route per right request type - "/webhooks/rtp", "/webhooks/rta", etc.

Inside each webhook controller, we take actions related to the Step Name of the webhook, which tells us where exactly in the Right Request flow we are.  Depending on the flow, we upload data files which for RTP and RTBF can be of any type, but for RTA and RTU must be a flat key-value json file with the fields to update.

## Webhooks - Consent

We also have implemented a webhook which is hit when a new Consent entry is made in the 4Comply system.  We can use the results of this webhook to take additional actions.
