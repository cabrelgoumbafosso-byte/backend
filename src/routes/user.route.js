import { Router } from "express";
import userController from "../controllers/user.controller.js";
import verifRole from "../middleware/verifRole.js";
import authMiddleware from "../middleware/authMiddleware.js";


const userRoute = Router()

const patternUsers = {
    SIGNUP: '/signup/user',
    LOGIN: '/login/user',
    REFRESH: '/refresh',


    CREATE_GREFFIER: '/signup/greffier',
    CREATE_PROCUREUR: '/signup/procureur',

    UPDATE_PASSWORD: '/update'
}


userRoute.post(patternUsers.SIGNUP, userController.signUp)
userRoute.post(patternUsers.LOGIN, userController.login)

userRoute.post(patternUsers.CREATE_GREFFIER, authMiddleware, verifRole('ADMIN'), userController.createGreffier)
userRoute.post(patternUsers.CREATE_PROCUREUR, authMiddleware, verifRole('ADMIN'), userController.createProcureur)

userRoute.put(patternUsers.UPDATE_PASSWORD, authMiddleware, verifRole('GREFFIER', 'PROCUREUR'), userController.updatePassword)


userRoute.post(patternUsers.REFRESH, userController.refresh)


export default userRoute