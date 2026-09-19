import prisma from "../lib/prisma.js";
import { httpCode } from "../static/httpCode.js"
import { v4 as uuidv4 } from "uuid";
import pdfService from "../services/pdf.service.js";



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
            return res.status(httpCode.OK).json({message: `Liste des demandes. Total : ${allDemande.length}`, allDemande})
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    getDemandeById: async(req, res)=>{
        try {
            const {id} = req.params
            const demande = await prisma.demande.findUnique({
                where: {id},
                include: {
                    pieces: true,
                    user: {select : {nom: true, email:true, telephone:true }}
                }
            })

            if (!demande) {
                return res.status(httpCode.NOT_FOUND).json({message: 'Demande introuvable'})
            }

            return res.status(httpCode.OK).json({message: `Demande de ${demande.nom}`, demande })
            
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    traiterParGreeffier : async(req, res)=>{
        try {
            const {id} = req.params

            const greffier = await prisma.users.findUnique({where:{id: req.user.id}})

            if (!greffier.signatureUrl || !greffier.cachetUrl) {
                return res.status(httpCode.BAD_REQUEST).json({message: `Desole Mr ${greffier.nom} veuillez d'abord enregistrer votre cachet et votre signature avant de traiter une demande`})
            }

            const demande = await prisma.demande.findUnique({
                where: {id},
                include: {pieces: true}
            })
            if (!demande) {
                return res.status(httpCode.NOT_FOUND).json({ message: 'Demande introuvable' });
            }
            if (demande.statutDemande !== 'SOUMISE') {
                return res.status(httpCode.BAD_REQUEST).json({message: "Cette demande n'est pas au statut SOUMISE, elle a déjà été traitée ou rejetée"});
            }

           const demandeTraitee =  await prisma.demande.update({
                where: {id},
                data: {
                    greffierId: req.user.id,
                    dateSignatureGreffier: new Date(),
                    statutDemande: 'EN_ATTENTE_PROCUREUR'
                }
            })
            return res.status(httpCode.OK).json({message: `Demande traite par le greffier Mr ${greffier.nom}. En attente du procurreur`, demandeTraitee})

            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    traiterParProcureur: async (req, res) => {
            try {
                const { id } = req.params;

                const procureur = await prisma.users.findUnique({ where: { id: req.user.id } });
                if (!procureur.signatureUrl || !procureur.cachetUrl) {
                    return res.status(httpCode.BAD_REQUEST).json({
                        message: "Veuillez d'abord enregistrer votre signature et votre cachet"
                    });
                }

                const demande = await prisma.demande.findUnique({ where: { id } });
                if (!demande) {
                    return res.status(httpCode.NOT_FOUND).json({ message: 'Demande introuvable' });
                }

                if (demande.statutDemande !== 'EN_ATTENTE_PROCUREUR') {
                    return res.status(httpCode.BAD_REQUEST).json({
                        message: "Cette demande n'est pas en attente de validation du procureur"
                    });
                }

                const greffier = await prisma.users.findUnique({ where: { id: demande.greffierId } });
                const documentUrl = await pdfService.genererExtrait(demande, greffier, procureur);

                const demandeValidee = await prisma.demande.update({
                    where: { id },
                    data: {
                        procureurId: req.user.id,
                        dateSignatureProcureur: new Date(),
                        statutDemande: 'VALIDEE',
                        documentUrl
                    }
                });

                return res.status(httpCode.OK).json({ message: 'Demande validée, extrait généré', demandeValidee });

                } catch (error) {
                    return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
                }
    },

    telechargerExtrait: async (req, res) => {
            try {
                const { id } = req.params;
                const demande = await prisma.demande.findUnique({ where: { id } });

                if (!demande) {
                    return res.status(httpCode.NOT_FOUND).json({ message: 'Demande introuvable' });
                }

                if (!['VALIDEE', 'DELIVREE'].includes(demande.statutDemande)) {
                    return res.status(httpCode.BAD_REQUEST).json({ message: "L'extrait n'est pas encore disponible" });
                }

                const estProprietaire = demande.userId === req.user.id;
                const estAgent = ['GREFFIER', 'PROCUREUR', 'ADMIN'].includes(req.user.role);
                if (!estProprietaire && !estAgent) {
                    return res.status(httpCode.FORBIDDEN).json({ message: "Vous n'avez pas accès à ce document" });
                }

                if (demande.statutDemande === 'VALIDEE') {
                    await prisma.demande.update({
                        where: { id },
                        data: { statutDemande: 'DELIVREE', dateDelivrance: new Date() }
                    });
                }

                return res.download(path.resolve(demande.documentUrl));

            } catch (error) {
                return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
            }
    },

    rejeterDemande : async (req, res)=>{
        try {
            const {id} = req.params
            const {motifRejet} = req.body

            if (!motifRejet) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Veuillez entrer le motif du rejet de la demande'})
            }
            const demande = await prisma.demande.findUnique({where: {id}})

            if (!demande) {
                return res.status(httpCode.NOT_FOUND).json({ message: 'Demande introuvable' });
            }
            const demandeRejetee = await prisma.demande.update({
                where: {id},
                data: {statutDemande: 'REJETEE', motifRejet}
            })

            return res.status(httpCode.OK).json({message: `Demande rejetee`, demandeRejetee})
            
        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message }); 
        }
    },

}

export default demandeControlleur
