const express = require("express");
const cors = require("cors");
const db = require("./queries");
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());


// url: http://localhost:3000/
// app.get("/", (req, res) => {
//   res.json({ info: 'here we are' })
// })

// url: http://localhost:3000/pledges
app.get('/pledges', db.getPledges);

// url: http://localhost:3000/pledges/{id}
app.get('/pledges/:id', db.getPledgeById)

app.post('/pledges', db.postPledge)

app.delete('/pledges/:id', db.deletePledge)


module.exports = app;