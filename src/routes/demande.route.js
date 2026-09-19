import { Router } from "express";
import demandeControlleur from "../controllers/demande.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";
import verifRole from "../middleware/verifRole.js";
import upload from "../middleware/upload.middleware.js";

const demandeRoute = Router()

const patternDemande = {
    CREATE: '/create',
    MyDEMANDE: '/me',
    ALLDEMANDE: '/all',
    GET_DEMANDE_ID : '/:id',

    TRAITER_PAR_GREFFIER : '/:id/greffier',
    REJETER_DEMANDE : '/:id/rejet'
}


demandeRoute.post(patternDemande.CREATE, authMiddleware, upload.fields([{name: 'cni', maxCount:1}, {name: 'acteNaissance', maxCount: 1}]), demandeControlleur.create)
demandeRoute.get(patternDemande.MyDEMANDE, authMiddleware, demandeControlleur.getMyDemande)

demandeRoute.get(patternDemande.ALLDEMANDE, authMiddleware, verifRole('GREFFIER', 'PROCUREUR', 'ADMIN'), demandeControlleur.getAllDemande)
demandeRoute.get(patternDemande.GET_DEMANDE_ID, authMiddleware, verifRole('GREFFIER', 'PROCUREUR', 'ADMIN'), demandeControlleur.getDemandeById)

demandeRoute.put(patternDemande.TRAITER_PAR_GREFFIER, authMiddleware, verifRole('GREFFIER'), demandeControlleur.traiterParGreeffier)
demandeRoute.put(patternDemande.REJETER_DEMANDE, authMiddleware, verifRole('GREFFIER', 'PROCUREUR'), demandeControlleur.rejeterDemande)

export default demandeRoute