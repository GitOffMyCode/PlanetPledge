const express = require("express");
const cors = require("cors");
const pledgeData = require("./pledges.json");

const app = express();
app.use(cors());

app.get("/pledges", (req, res) => {
  res.json(pledgeData);
} )

module.exports = app;