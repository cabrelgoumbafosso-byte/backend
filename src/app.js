import express from 'express'
import userRoute from './routes/user.route.js'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import demandeRoute from './routes/demande.route.js'

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: { error: "Trop de requete depuis cette adresse IP" }
});


//middleware
app.use(express.json())
app.use(morgan('combined'))
app.use(limiter)

app.use('/uploads', express.static('uploads'))

//routing
app.use('/api/auth', userRoute)
app.use('/api/demande', demandeRoute)




export default app

