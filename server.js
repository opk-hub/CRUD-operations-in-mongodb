
const express = require('express')
const dotEnv = require('dotenv')
const {MongoClient} = require('mongodb')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app =express()
// By using "dotenv," to improve the manageability, security, and flexibility of your Node.js application's configuration. It's a best practice in the Node.js ecosystem
dotEnv.config()  


// "body-parser" is a Node.js middleware used to parse request bodies, such as JSON and URL-encoded data, in web applications.
app.use(bodyParser.json())

// connection for mongdb
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('MongoDB connected suecessfully')
    })
    .catch((error)=>{
        console.log('Error',error)
    })


const PORT= process.env.PORT || 5000


// console.log(process.env) 


app.use('/users',userRoutes)

app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`)
})