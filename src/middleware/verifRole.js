import { httpCode } from "../static/httpCode.js";


const verifRole = (...roleRequis)=>{
    return (req, res, next)=>{
            if (!req.user) {
                return res.status(httpCode.UNAUTHORIZED).json({message: "Vous n'estes pas authentifie"})
            }
            if (!roleRequis.includes(req.user.role)) {
                return res.status(httpCode.FORBIDDEN).json({message: 'Route reservée aux rôles: ' + roleRequis.join(', ')})
            }

            next()
    }
}


export default verifRole