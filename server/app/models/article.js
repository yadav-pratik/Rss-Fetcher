const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    date_published : {
        type : String,
        unique : true
    },
    title : {
        type : String
    },
    url : {
        type : String
    },
    summary : {
        type : String
    },
    source : {
        type : String
    },
    category : {
        type : String
    }
}, {timestamps : true})

const Article = mongoose.model('Article',articleSchema)

module.exports = Article