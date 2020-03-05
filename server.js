const express = require("express");
const cors = require("cors");
const db = require("./queries");
// const pledgeData = require("./pledges.json");

const app = express();
app.use(cors());

// url: http://localhost:3000/pledges

app.get("/", (req,res) =>{
  res.json({info: 'here we are'})
})
// app.get("/pledges", ()=>db.getPledges);
app.get("/pledges", db.getPledges);

module.exports = app;