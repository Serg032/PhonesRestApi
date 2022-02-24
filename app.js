const express = require('express')
const cors= require("cors");
const app = express()
const port = 8000

const phone = require('./src/routes/phoneRouter')

app.use(express.json())
app.use(cors());
app.options("*", cors());

app.use('/phone', phone)
 
app.listen(port, "", () => {
    console.log(`App running on port ${port}`)
})