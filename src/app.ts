import express from "express"
import mainRouter from "./mainRouter"
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use('/api/v1/' ,mainRouter)
app.get('/health',(req,res)=>{
    res.status(200).json({
        msg: "Yes baby! server is up and running"
    })
})

app.listen(PORT,()=>console.log(`[ READY ] Server is running at http://localhost:${PORT}`))