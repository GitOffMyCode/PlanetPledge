const express = require("express");
const cors = require("cors");
const pledgeData = require("./pledges.json");

const app = express();
app.use(cors());

// url: http://localhost:3000/pledges
app.get("/pledges", (req, res) => {
  console.log(req.headers)
  res.json(pledgeData);
})


module.exports = app;