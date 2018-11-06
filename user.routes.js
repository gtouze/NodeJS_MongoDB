const express = require('express');
const router = express.Router();

const connector = require('./mongoDB')

router.get('/',(req,res) => {
    connector.db.collection('user').insert({
        id: 1,
        name: "Gurvan",
        password: "Test"
    })
    res.send(connector.db.collection('user'))
});

module.exports = router;