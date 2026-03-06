import express from "express"
import patientRouter from "./features/patient/patient.controller"
import diseaseRouter from "./features/disease/disease.controller"
const mainRouter = express.Router()

mainRouter.use('/patient', patientRouter)
mainRouter.use('/disease', diseaseRouter)
export default mainRouter