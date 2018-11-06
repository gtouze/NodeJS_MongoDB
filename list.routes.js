const express = require ('express');
const router = express.Router();

const connector = require('./mongoDB')

router.get('/',(req,res) => {
    connector.db.collection('list').find({}).toArray()
   
    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});

router.post('/',(req,res) => {
    connector.db.collection('list').insert({
        id: 1,
        name: "La liste",
        user: "gtouze",
        items: "un item"
    })
    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});


router.delete('/',(req,res) => {
    connector.db.collection('list').delete('/:id')

    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});

module.exports = router;