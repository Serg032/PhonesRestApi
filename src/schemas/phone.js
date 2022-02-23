const mongoose = require('mongoose')

module.exports = {
    title: String,
    description: String,
    color: String,
    price: Number,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}