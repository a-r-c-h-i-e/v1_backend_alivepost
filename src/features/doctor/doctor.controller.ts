import express from "express";
import { AuthUser } from "../../middleware/Auth";

import { createDoctorService } from "./doctor.service";

const DoctorRouter = express.Router();

DoctorRouter.post("/signup", AuthUser, async (req, res) => {
  try {
    const { username, name } = req.body;

    if (!username || !name) {
      return res.status(400).json({
        msg: "username and name are required",
      });
    }

    const hospitalId = req.user?.id as number;

    const doctor = await createDoctorService(username, name, hospitalId);

    return res.status(201).json({
      msg: "Doctor created successfully",
      doctor,
    });
  } catch (error: any) {
    return res.status(400).json({
      msg: error.message,
    });
  }
});

export default DoctorRouter;
