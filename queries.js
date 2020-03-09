const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: 'gennaheald',
//     host: 'localhost',
//     database: 'planetpledge',
//     password: 'whatever', 
//     port: 5432

// })

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


// insert into pledges (pledge_title, pledge_detail, pledge_type, username) 
// values ('eat vegan once a week', 'for health for the planet and for the animals', 'W', 'HelenG');
// values ('ehampoo bar', 'buy shampoo bar and start using it', 'C', 'HelenG');

const postPledge = (req, res) => {
    const title = req.body.title;
    const detail = req.body.detail;
    const type = req.body.type;
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

module.exports = {
    getPledges,
    getPledgeById,
    postPledge
}