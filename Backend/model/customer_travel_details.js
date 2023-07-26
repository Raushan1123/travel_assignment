const { default: mongoose } = require("mongoose");

const CustomerTravelDetailsSchema = mongoose.Schema({
  Name: {type: String, required: true},
  Email: {type: String, required: true},
  Phone: {type: String, required: true},
  Destination: {type: String, required: true},
  Interests: {type: String, required: true},
  No_of_travellers: {type: Number, required: true},
  Budget: {type: Number, required: true},
  Trip_Duration: {type: Number, required: true},
  Trip_Date: {type: Date, required: true},
  Planning_Stage: {type: String, required: true},
  Notes: {type: String, required: false},
});

const Travel = mongoose.model("travel", CustomerTravelDetailsSchema);

module.exports = { Travel };