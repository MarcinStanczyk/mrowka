const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema ({
    title:      String,
    year:       Number,
    genre:      [String],
    director:   [String],
    actors:     [String],
    plot:       String,
})

module.exports = mongoose.model("Movie", MovieSchema)
