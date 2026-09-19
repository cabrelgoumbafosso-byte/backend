import prisma from "../lib/prisma.js"
import { httpCode } from "../static/httpCode.js"
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const generateAccessToken = (user)=>{
    return jwt.sign(
        {id: user.id, email: user.email, role: user.role},
        process.env.JWT_ACCESS_SECRET,
        {expiresIn: '60m'}
    )
}
const generateRefreshToken = (user)=>{
    return jwt.sign(
        {id: user.id},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: '7d'}
    )
}


const userController = {

    signUp: async (req, res)=>{

      try {
          const {nom, prenom, email, motDePasse, telephone, role } = req.body

        if (!nom || !email || !motDePasse || !telephone) {
            return res.status(httpCode.BAD_REQUEST).json({message: 'Tous les champs sont requis'})
        }

        const emailExist = await prisma.users.findUnique({
            where: {email}
        })

        if (emailExist) {
            return res.status(httpCode.CONFLICT).json({message: 'Cette utilisateur existe deja'})
        }
        const hashPassword = await bcrypt.hash(motDePasse, 10)

        const newUser = await prisma.users.create({
            data: {
                id: uuidv4(),
                nom, prenom, email, motDePasse: hashPassword, telephone, role: role
            }
        })
        

        return res.status(httpCode.CREATED).json({message: 'Utilisateur cree avec success !', newUser})
     
      } catch (error) {
        return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
      }   
    },


    login: async(req, res)=>{
        try {
            const {email, motDePasse} = req.body
            if (!email || !motDePasse) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Tous les champs sont requis'})
            }

            const user = await prisma.users.findUnique({where: {email}})
            if (!user) {
                return res.status(httpCode.NOT_FOUND).json({message: 'Email ou mot de passe incorrect'})
            }

            const verifMotDePasse = await bcrypt.compare(motDePasse, user.motDePasse)
             if (!verifMotDePasse) {
                return res.status(httpCode.UNAUTHORIZED).json({message: 'Mot de passe incorrect'})
            }

            const accessToken = generateAccessToken(user)
            const refreshToken = generateRefreshToken(user)

            await prisma.users.update({
                where: {id: user.id},
                data: {refreshToken}
            })

            return res.status(httpCode.OK).json({
                message: 'Utilisateur connecte avec succes',
                token: accessToken,
                refreshToken,
                user: {id: user.id, role: user.role, nom: user.nom}
            })


        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    getUsers: async(req ,res)=>{
        try {
            const allUsers = await prisma.users.findMany({
                orderBy: {createdAt: 'desc'},
            })

            if (!allUsers) {
                return res.status(httpCode.NOT_FOUND).json({message: 'Aucun utilisateur enregistre'})
            }
            return res.status(httpCode.OK).json({message: 'Liste des Users', allUsers})

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    refresh: async(req, res)=>{
        try {
            const {refreshToken} = req.body
            if (!refreshToken) {
                res.status(httpCode.BAD_REQUEST).json({message: 'Refresh token requis'})
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET)
            const user = await prisma.users.findUnique({where: {id: decoded.id}})
            if (!user || user.refreshToken !== refreshToken) {
               return res.status(httpCode.UNAUTHORIZED).json({message: 'Refresh token invalide ou expiré'})
            }
            const newAccessToken = generateAccessToken(user)

            return res.status(httpCode.OK).json({message: 'Nouveau access token', accesToken: newAccessToken})


        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    createGreffier: async(req, res)=>{
        try {
            const {nom, prenom, email, motDePasse, telephone, role, tribunal} = req.body

            if (!nom || !prenom || !email || !motDePasse || !telephone || !role || !tribunal) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Tous les champs sont requis'})
            }
            const greffier = 'GREFFIER'

            if (role.toUpperCase() !== greffier) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Cette route est reserve a la creation des greffiers, verifiez le role'})
            }

            const emailExist = await prisma.users.findUnique({where: {email}})
            if (emailExist) {
                return res.status(httpCode.CONFLICT).json({message: 'Cette adresse mail est deja utilise'})
            }
            const hashPassword = await bcrypt.hash(motDePasse, 10)

            const newGreffier = await prisma.users.create({
                data: {
                    id: uuidv4(),
                    nom, prenom, email, motDePasse:hashPassword, telephone, tribunal,
                    role : role.toUpperCase()
                }
            })
            
            return res.status(httpCode.CREATED).json({message: 'Greffier cree avec succes', newGreffier})

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },


    createProcureur: async(req, res)=>{
        try {
            const {nom, prenom, email, motDePasse, telephone, role, tribunal} = req.body

            if (!nom || !prenom || !email || !motDePasse || !telephone || !role || !tribunal) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Tous les champs sont requis'})
            }
            const procureur = 'PROCUREUR'

            if (role.toUpperCase() !== procureur) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Cette route est reserve a la creation des procureurs, verifiez le role'})
            }

            const emailExist = await prisma.users.findUnique({where: {email}})
            if (emailExist) {
                return res.status(httpCode.CONFLICT).json({message: 'Cette adresse mail est deja utilise'})
            }
            const hashPassword = await bcrypt.hash(motDePasse, 10)

            const newProcureur = await prisma.users.create({
                data: {
                    id: uuidv4(),
                    nom, prenom, email, motDePasse:hashPassword, telephone, tribunal,
                    role: role.toUpperCase()
                }
            })

            return res.status(httpCode.CREATED).json({message: 'Procureur cree avec succes', newProcureur})


        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    updatePassword: async(req, res)=>{
        try {
            const {ancienMotDePasse, newMotDePasse} = req.body

            if (!ancienMotDePasse || !newMotDePasse) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Tous les champs sont requis'})
            }
            const user = await prisma.users.findUnique({where:{id: req.user.id}})
            if (!user) {
                return res.status(httpCode.NOT_FOUND).json({message: 'Utilisateur introuvable'})
            }
            const verifMotDePasse = await bcrypt.compare(ancienMotDePasse, user.motDePasse)
            if (!verifMotDePasse) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Ancien mot de passe incorrect'})
            }

            const hashNewPassord = await bcrypt.hash(newMotDePasse, 10)

            await prisma.users.update({
                where:{id: user.id},
                data: {motDePasse: hashNewPassord}
            })

            return res.status(httpCode.OK).json({ message: 'Mot de passe mis à jour avec succès' });

        } catch (error) {
            return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },

    uploadSignatureCachet : async(req, res)=>{
        try {
            if (!req.files || (!req.files['signature'] && !req.files['cachet'])) {
                return res.status(httpCode.BAD_REQUEST).json({message: 'Veuillez fournir votre cachet et votre signature'})
            }
            const dataMaj = {}
            if (req.files['signature']) {
                dataMaj.signatureUrl = req.files['signature'][0].path
            } 
             if (req.files['cachet']) {
                dataMaj.cachetUrl = req.files['cachet'][0].path
            } 
            const user = await prisma.users.update({
                where: {id: req.user.id},
                data: dataMaj
            })

            return res.status(httpCode.OK).json({
                message: 'Signature et Cachet bien enregistree',
                signatureUrl: user.signatureUrl,
                cachetUrl: user.cachetUrl
            })

        } catch (error) {
             return res.status(httpCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }


}


export default userController