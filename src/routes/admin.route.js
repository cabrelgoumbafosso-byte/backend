import { Router } from "express";
import adminController from "../controllers/admin.controller.js";


const adminRoute = Router()

const patternAdmin = {
    SIGNUP: '/signup',
    LOGIN: '/login',
}



adminRoute.post(patternAdmin.SIGNUP, adminController.signup)
adminRoute.post(patternAdmin.LOGIN, adminController.login)


export default adminRoute