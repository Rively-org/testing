require('dotenv').config()
const PORT = 3000
const express = require('express')
const app = express()

const connectDB = require('./db/connect')

//Routes
const usersCompanyRoutes = require('./Routes/UsersCompanyRoutes')
const competitorRoutes = require('./Routes/CompetitorRoutes')


//middlewares
app.use(express.json())
app.use('/api/v1/userscompany',usersCompanyRoutes)
app.use('/api/v1/competitor',competitorRoutes)

app.get('/',(req,res)=>{
    res.send('Gotcha')
})

const start= async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`Server is listening on port ${PORT}`))
    }
    catch(error){
        console.log(error);
    }
}

start()
