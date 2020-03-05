const Pool=require("pg").Pool;
const pool=new Pool({
    user: 'helengardner',
    host: 'localhost',
    database: 'planetpledge',
    password: '',
    port: 5432
})

const getPledges = (req, res) =>{
    pool.query('SELECT * FROM pledges', (error, results) =>{
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports=getPledges;