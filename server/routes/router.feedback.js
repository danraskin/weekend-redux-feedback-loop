const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => { 
    let userFeedback = req.body;
    console.log('POST /', req.body);
    const queryText =
        `INSERT INTO "feedback"
          ("feeling", "understanding","support", "comments")
          VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [
            userFeedback.feeling, 
            userFeedback.understanding, 
            userFeedback.support, 
            userFeedback.comments
    ]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error POST /', error)
        res.sendStatus(500);
    });
})

module.exports = router;