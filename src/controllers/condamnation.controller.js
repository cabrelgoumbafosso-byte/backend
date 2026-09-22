import prisma from "../lib/prisma.js";
import { httpCode } from "../static/httpCode.js"
import { v4 as uuidv4 } from "uuid";

export const normaliserDate = (date) => {
    const d = new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};

const condamnationController = {
    create: async(req, res) =>{
        try {
            const { nom, prenom, dateNaissance, lieuNaissance, nomPere, nomMere, infraction, tribunal, dateCondamnation, peine } = req.body
            if (!nom || !prenom || !dateNaissance || !lieuNaissance || !infraction || !tribunal || !dateCondamnation) {
                return res.status(httpCode.BAD_REQUEST).json({ message: 'Tous les champs sont requis' })
            }

            const condamnation = await prisma.condamnation.create({
                data: {
                    id: uuidv4(),
                    nom, prenom, lieuNaissance, nomPere, nomMere, infraction, tribunal, peine,
                    dateNaissance: normaliserDate(dateNaissance),
                    dateCondamnation: new Date(dateCondamnation)
                }
                
            })

            return res.status(httpCode.CREATED).json({ message: 'Condamnation enregistrée avec succès', condamnation })

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message })
        }
    },

    getAll: async(req, res)=>{
        try {
              const condamnations = await prisma.condamnation.findMany({ orderBy: { createdAt: 'desc' } })
              return res.status(httpCode.OK).json({ message: 'Liste des condamnations enregistrées', condamnations })
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            await prisma.condamnation.delete({ where: { id } });
            return res.status(httpCode.OK).json({ message: 'Condamnation supprimée' });
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

export default condamnationController