const mongoClient = require('./MongoDB')
const app = require('express')()
const bodyParser = require('body-parser')

const user = require("./user.routes")

mongoClient.init()
   .then(client => {
       app.use(bodyParser.json())

       app.use('/user.routes', user)

       app.listen(9999, () => {
           console.log('App listening on port 9999')
       })
   }).catch(err => { throw err})