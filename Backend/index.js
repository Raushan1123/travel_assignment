const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const { travelDetailsRoute } = require("./routes/customer_travel_routes");
const PORT = process.env.PORT || 5949;
 const app = express();

app.use(express.json());
app.use(cors());
app.use("/travelinfo", travelDetailsRoute);
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log(err);
  }
  console.log(`server started on port ${PORT}`);
});

module.exports = {app}