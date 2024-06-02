
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

























/*// require(`dotenv`).config()
import dotenv from 'dotenv'
import mongoose from "mongoose";//from importing mongoose 
import { DB_NAME } from "./constants";//from importing database name from another js file
import connectdb from "./db/index.js";

dotenv.config({
    path : './env'
})
  
            //*This is first approach to connect databases and backend*

// connectdb();


             //*this is second approach to connect databases and backend* 

import express from "express";//for importing express
const app = express();//this app variable is for using the express all code 

 ; (async () => {
    //here we made a one IFFE and first function is async. Try catch syntax is good to handling the error 
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)//connection of data base 
            //MONGODB_URI is variable of mongodb atlas from .env file
            //DB_NAME is db name constants.js file
            app.on("error",(error) => {
                //.on is an type of listen. This for error handling
                console.log("ERRR :", error)
                throw error//throw the error
            })
            app.listen(process.env.PORT, () => {
                //The port is from env file this is its syntax
                console.log(`your app is listening on ${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR :", error)//we can also use console.log
            throw error//We also throw the error
        }
    })()*/