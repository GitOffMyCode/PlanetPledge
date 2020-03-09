const Pool = require("pg").Pool;

// DOTENV
// We load the dotenv library and call the config() method, which loads the variables into the process.env
require('dotenv').config()
const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

const getPledges = (req, res) => {
    pool.query('SELECT * FROM pledges', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getPledgeById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM pledges WHERE pledge_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deletePledge = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM pledges WHERE pledge_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)  
    })
}

// insert into pledges (pledge_title, pledge_detail, pledge_type, username) 
// values ('eat vegan once a week', 'for health for the planet and for the animals', 'W', 'HelenG');
// values ('ehampoo bar', 'buy shampoo bar and start using it', 'C', 'HelenG');

const postPledge = (req, res) => {
    const title = req.body.pledge_title;
    const detail = req.body.pledge_detail;
    const type = req.body.pledge_type;
    const username = req.body.username;
    const query = "INSERT INTO pledges (pledge_title, pledge_detail, pledge_type, username) VALUES ($1, $2, $3, $4) RETURNING pledge_id;";

    pool.query(query, [title, detail, type, username], (error, results) => {
        if (error) {
            console.log('there was a problem with this request');
            throw error
        }
        else res.status(201).send({'pledge_id':results.rows[0].pledge_id})
    })
}

const updatePledge = (req, res) => {
    const pledge_id = parseInt(req.params.id);
    const pledge_date = req.body.pledge_date;
    const pledge_status = req.body.pledge_status;
    const query = "INSERT INTO pledge_status (pledge_id, pledge_date, pledge_status) VALUES ($1, $2, $3);";

    pool.query(query, [pledge_id, pledge_date, pledge_status], (error, results) => {
        if (error) {
            console.log('there was a problem with this request');
            throw error
        }
        // res.send("anything!")
        res.status(201).send({'info': 'it worked!'})
    })
}


module.exports = {
    getPledges,
    getPledgeById,
    postPledge,
    deletePledge,
    updatePledge
  }

