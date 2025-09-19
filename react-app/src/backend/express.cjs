const express = require('express')
const app = express()

// local test: GET http://localhost:3333/teachers
app.get('/teachers', (req, res)=>{
    // TODO - implement GET /teachers
    res.sendStatus(200)
})

const port = 3333
app.listen(port, ()=>{
    console.log('Node Express backend server starts on port ', port)
})