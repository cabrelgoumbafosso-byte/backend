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
          const {nom, prenom, email, motDePasse, telephone } = req.body

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
                nom, prenom, email, motDePasse: hashPassword, telephone, role: 'CITOYEN'
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
    }
}


export default userController