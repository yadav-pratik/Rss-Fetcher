const express = require('express')
const cors = require('cors')
const configureDB = require('./config/database')
const router = require('./config/routes')
const startCron = require('./app/cron-job/cron')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

configureDB()

const port = process.env.PORT || 3040

app.listen(port, ()=>{
    console.log('server is running on port',port)
})

startCron()
