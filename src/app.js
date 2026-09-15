import express from 'express'
import userRoute from './routes/user.route.js'
import adminRoute from './routes/admin.route.js'


const app = express()


//middleware
app.use(express.json())


//routing
app.use('/api/auth', userRoute)
app.use('/api/auth/admin', adminRoute)


export default app

