const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const cors = require('cors');

//env variable
dotenv.config()

//connect to database
connectDB() 

const app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//
app.use(cors())

app.use('/api/travel',require('./routes/travelRoute'))

const POST = process.env.POST || 5000

app.listen(POST,console.log(`server listening on post ${POST}`))
