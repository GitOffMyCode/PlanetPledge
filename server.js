const express = require("express");
const cors = require("cors");
const pledgeData = require("./pledges.json");

const app = express();
app.use(cors());

app.get("/pledges", (req, res) => {
  res.json(pledgeData);
} )

app.listen(3000, (err) => {
  if (err) {
      console.log("there was an error", err)
      return;
  };
  console.log("now listening on port 3000");
});

console.log("hello! test")

module.exports=app;