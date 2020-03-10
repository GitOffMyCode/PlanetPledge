const express = require("express");
const cors = require("cors");
const db = require("./queries");
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());


// url: http://localhost:3000/pledges
app.get('/pledges', db.getPledges);

// url: http://localhost:3000/pledges/{id}
app.get('/pledges/:id', db.getPledgeById)

// url: http://localhost:3000/pledges
app.post('/pledges', db.postPledge)

// url: http://localhost:3000/pledges/{id}
app.delete('/pledges/:id', db.deletePledge)

// url: http://localhost:3000/pledges{id}
app.post('/pledges/:id', db.updatePledge)


module.exports = app;