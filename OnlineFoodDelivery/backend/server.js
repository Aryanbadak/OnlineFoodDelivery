import express, { json } from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderroute.js'


//middleware
const app=express()
config()
app.use(cors())

app.use(json())
const PORT=process.env.PORT

//db connection
connectDB()

//api 
app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use ("/api/order",orderRouter)


app.get('/',(req,res)=>{
    res.send("API Working")
})
app.listen(PORT,()=>{
    console.log(`server is started on ${PORT}`)
})