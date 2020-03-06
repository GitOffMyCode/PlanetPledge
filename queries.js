const Pool = require("pg").Pool;
const pool = new Pool({
    user: 'gennaheald',
    host: 'localhost',
    database: 'planetpledge',
    password: 'fr33dom',
    port: 5432
})

const getPledges = (req, res) => {
    pool.query('SELECT * FROM pledges', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getPledges
  }