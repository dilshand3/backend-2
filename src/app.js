import express from 'express'
const app = express()
import cors from 'cors'//to download cors and cookiePraser = npm i cookie-parser cors
import cookieParser from 'cookie-parser'

app.use(cors(
    {origin : process.env.CORS_ORIGIN,
        credentials: true
}))

app.use(express.json({limit:"16kb"}))//json file accept
app.use(express.urlencoded({extended:true,limit:"16kb"}))//understanding the url and give the search
app.use(express.static("public"))//specific folder that have publick asset 

app.use(express.cookieParser())

export {app}