const { Travel } = require("../model/customer_travel_details");

const postTravelDetails = async (req, res) => {
  try {
    const travelDetails = new Travel(req.body);
    await travelDetails.save();
    res.status(201).json(travelDetails);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error in saving details!");
  }
};

const getTravelDetails = async (req, res) => {
  try {
    const travelDetails = await Travel.find();
    res.json(travelDetails);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error in getting all queries");
  }
};

module.exports = { postTravelDetails, getTravelDetails };