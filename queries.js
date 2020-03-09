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

module.exports = {
    getPledges,
    getPledgeById,
    deletePledge
  }