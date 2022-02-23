const mongoose = require('mongoose')
require('dotenv').config()

const DB_URL = process.env.DB_URL
const DATABASE = process.env.DATABASE

mongoose.connect(`${DB_URL}/${DATABASE}`)

const phoneSchema = require('./../schemas/phone')

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = {
    Phone 
}