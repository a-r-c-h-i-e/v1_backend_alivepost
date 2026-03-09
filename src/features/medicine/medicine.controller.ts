import express from "express";
import { MedicineSchema, type MedicineCreateSchema } from "./medicine.schema";
import { CreateMedicine, MedicineSearch } from "./medicine.service";

const medicineRouter = express.Router();
//Create Medicine
medicineRouter.post("/create", async (req, res, next) => {
  try {
    const data: MedicineCreateSchema = req.body;
    const safeData = MedicineSchema.parse(data);
    const medicine = await CreateMedicine(safeData);
    res.status(200).json({
      success: true,
      data: medicine,
    });
  } catch (error) {
    next(error);
  }
});

//Search Medicine or for debouncing
medicineRouter.get("/search", async (req, res, next) => {
  try {
    const value = req.query.value as string;
    const medicine = await MedicineSearch(value);
    res.status(200).json({
      success: true,
      data: medicine,
    });
  } catch (error) {
    next(error);
  }
});
export default medicineRouter;
