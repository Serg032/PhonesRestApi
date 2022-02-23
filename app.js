const express = require('express')
const app = express()
const port = 8000

const phone = require('./src/routes/phoneRouter')

app.use(express.json())

app.use('/phone', phone)

app.listen(port, "", () => {
    console.log(`App running on port ${port}`)
})