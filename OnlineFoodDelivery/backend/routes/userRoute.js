import express from 'express'
import { login, registeruser } from '../controllers/UserController.js'


const userRouter = express.Router()

userRouter.post("/register", registeruser)
userRouter.post("/login", login)

export default userRouter