import prisma from "../lib/prisma.js";
import { httpCode } from "../static/httpCode.js"
import { v4 as uuidv4 } from "uuid";



const demandeControlleur = {
    create: async (req, res)=>{
       try {
         const {nom, prenom, dateNaissance, lieuNaissance, motif, nomPere, nomMere, profession, situationMatrimonial, domicile, nationalite } = req.body
         
        if(!nom || !prenom || !dateNaissance || !lieuNaissance){
            return res.status(httpCode.BAD_REQUEST).json({message: 'Champs état civil requis'})
        }

        if (!req.files || !req.files['cni'] || !req.files['acteNaissance']) {
            return res.status(httpCode.BAD_REQUEST).json({ message: "La photocopie de la CNI et l'acte de naissance sont obligatoires." });
        }

        const numeroDemande = `CJ-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`
        console.log(numeroDemande);

        const pieceData = []
        if (req.files['cni']) {
            pieceData.push({url: req.files['cni'][0].path, type: 'CNI'})
        }
        if (req.files['acteNaissance']) {
            pieceData.push({url: req.files['acteNaissance'][0].path, type: 'ACTE_NAISSANCE'})
        }


        
        const newDemande = await prisma.demande.create({
            data: {
                id: uuidv4(),
                numeroDemande,
                motif,
                nom, prenom, dateNaisssance: new Date(dateNaissance), lieuNaissance, nomMere, nomPere, profession, situationMatrimonial, domicile, nationalite,
                userId: req.user.id,

                pieces: {
                    create: pieceData
                }
            },
            include: {
                pieces: true
            }
        })

        return res.status(httpCode.CREATED).json({
            message: 'Demande envoye avec succes',
            newDemande
        })
        
       } catch (error) {
        return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
       }

    },

    getMyDemande: async(req, res)=>{
        try {
            const myDemande = await prisma.demande.findMany({where: {userId: req.user.id}})
            if (!myDemande) {
                return res.status(httpCode.NOT_FOUND).json({message: 'Demande introuvable'})
            }

            return res.status(httpCode.OK).json({message: 'Consulter votre demande', myDemande})

        } catch (error) {
                return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    getAllDemande: async (req, res)=>{
        try {
            const allDemande = await prisma.demande.findMany({
                include:{user : {select:{nom: true, prenom: true, email: true}}}
            })
            return res.status(httpCode.OK).json({message: 'Liste des demandes', allDemande})
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

export default demandeControlleur
