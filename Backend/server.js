import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()

app.use(cors())

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : true , limit : '16kb'}))


// userROuter
import userRouter from './router/userRouter.js'
import cookieParser from 'cookie-parser'
app.use('/api/v1/user' , userRouter)

mongoose.connect('mongodb://localhost:27017/admin')
.then((response) => {
    app.listen(2002 , () => {
        console.log(`server run at port number ${2002}`)
    })
    console.log('successfully database connected : ' , mongoose.connection.host)
})


.catch((error) => {
    console.log(`database not connected error comes ,`,error.message)
})

