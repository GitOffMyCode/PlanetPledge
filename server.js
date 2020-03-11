const express = require("express");
const cors = require("cors");
const db = require("./queries");
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(cors());


// url: http://localhost:3002/pledges
app.get('/pledges', db.getPledges);

// url: http://localhost:3002/pledges/{id}
app.get('/pledges/:id', db.getPledgeById);

// url: http://localhost:3002/pledges_status
app.get('/pledges_status', db.getPledgeStatus);

// url: http://localhost:3002/pledges
app.post('/pledges', db.postPledge);

// url: http://localhost:3002/pledges/{id}
app.delete('/pledges/:id', db.deletePledge);

// url: http://localhost:3002/pledges{id}
app.post('/pledges_status/:id', db.markDailyPledgeAsActive);

// url: http://localhost:3002/pledges{id}
app.delete('/pledges_status/:id', db.markDailyPledgeAsInactive);

module.exports = app;