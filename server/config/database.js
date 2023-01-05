const mongoose = require('mongoose')
mongoose.set('strictQuery' , true)

const configureDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/rssFeed')
        .then(()=>{
            console.log('connected to db')
        })
        .catch(()=>{
            console.log('problem connecting to db')
        })
}

module.exports = configureDB