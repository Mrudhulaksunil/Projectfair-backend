//loads .env file contents into process.env by default

require('dotenv').config()

//import express and cors

const express=require('express')
const cors=require('cors')

const db=require('./DB/connection')


const router=require('./Routes/Router')

const appMiddleware=require('./Middlewares/appMiddleware')

//create a backend application using the express

const pfServer=express()

//use cors

pfServer.use(cors())
pfServer.use(express.json())//Returns middleware that only parses json

pfServer.use(appMiddleware)

pfServer.use(router)

pfServer.use('/uploads',express.static('./uploads'))//image exporting to frontend

//port creation
const port=4000 || process.env.port

//server listening

pfServer.listen(port,()=>{
    console.log('listening on port'+port);
})

//localhost:4000    ->response pfServer is started...
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started</h1>`)
})