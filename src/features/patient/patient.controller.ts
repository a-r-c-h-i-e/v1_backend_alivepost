import express from "express";
import {
  medicalHistorySchema,
  patientLoginSchema,
  patientSchema,
  type MedicalHistoryCreate,
  type PatientInput,
  type PatientLoginInput,
} from "./patient.schema";
import {
  CreatePatient,
  LoginPatient,
  MedicalHistoryCreateService,
} from "./patient.service";
import { success } from "zod";
const patientRouter = express.Router();

patientRouter.post("/create", async (req, res, next) => {
  const data: PatientInput = req.body;
  try {
    const safeData = patientSchema.parse(data);
    const patient = await CreatePatient(safeData);
    res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    next(error);
  }
});
patientRouter.post("/login", async (req, res, next) => {
  const data: PatientLoginInput = req.body;
  try {
    const safeData = patientLoginSchema.parse(data);
    const patient = await LoginPatient(safeData);
    res.status(200).cookie("token", patient.token).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    next(error);
  }
});

//Medical History create
patientRouter.post("/medicalhistorycreate", async (req, res, next) => {
  const data: MedicalHistoryCreate = req.body;
  try {
    const safeData = medicalHistorySchema.parse(data);
    const newData = await MedicalHistoryCreateService(safeData);
    res.status(200).json({
      success: true,
      data: newData,
    });
  } catch (error) {
    next(error);
  }
});

export default patientRouter;
