import { Router } from "express";
import userController from "../controllers/user.controller.js";


const userRoute = Router()

const patternUsers = {
    SIGNUP: '/signup',
    LOGIN: '/login',
}



userRoute.post(patternUsers.SIGNUP, userController.signUp)
userRoute.post(patternUsers.LOGIN, userController.login)


export default userRoute