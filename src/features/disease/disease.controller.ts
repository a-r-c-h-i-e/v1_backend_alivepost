import express from "express";
import { diseaseSchema, type DiseaseCreateSchema } from "./disease.schema";
import { CreateDisease } from "./disease.service";
const diseaseRouter = express.Router();

diseaseRouter.post("/create", async (req, res, next) => {
    try {
    const data :DiseaseCreateSchema= req.body;
    const safeData = diseaseSchema.parse(data);
    const diseaseData = await CreateDisease(safeData)
    res.status(201).json({
        success:true,
        data: diseaseData 
    })
    }catch (error) {
     next(error)   
    }})
export default diseaseRouter;