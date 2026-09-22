import { Router } from "express";
import condamnationController from "../controllers/condamnation.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import verifRole from "../middleware/verifRole.js";


const condamnationRoute = Router()

const patternCondamnation = {
    CREATE: '/create',
    ALL_CONDAMNATION: '/all',
    GET_CONDAMNATION_ID : '/:id',
    DELETE_CONDAMNATION : '/:id/delete'
}


condamnationRoute.post(patternCondamnation.CREATE, authMiddleware, verifRole('ADMIN'), condamnationController.create)
condamnationRoute.get(patternCondamnation.ALL_CONDAMNATION, authMiddleware, verifRole('ADMIN', 'GREFFIER', 'PROCUREUR'), condamnationController.getAll)
condamnationRoute.delete(patternCondamnation.DELETE_CONDAMNATION, authMiddleware, condamnationController.delete)



export default condamnationRoute