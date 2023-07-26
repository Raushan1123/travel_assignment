const express = require("express");
const { getTravelDetails, postTravelDetails } = require("../controller/customer_travel_controller");

const travelDetailsRoute = express.Router();

travelDetailsRoute.get("/", getTravelDetails);
travelDetailsRoute.post("/", postTravelDetails);

module.exports = { travelDetailsRoute };