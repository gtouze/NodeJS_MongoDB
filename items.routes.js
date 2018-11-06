const express = require ('express');
const router = express.Router();

const connector = require('./mongoDB')

router.get('/',(req,res) => {
    connector.db.collection('items').find({}).toArray()
   
    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});

router.post('/',(req,res) => {
    connector.db.collection('items').insert({
        id: 1,
        label: "Image Javascript",
        image: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/13/thumb_bigger_formation-javascript.png",
        description: "Ceci est le logo Javascript"
    })
    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});


router.delete('/',(req,res) => {
    connector.db.collection('items').delete('/:id')

    .then(result => res.send(result))
    .catch(error => console.log(error)) 
});

module.exports = router;