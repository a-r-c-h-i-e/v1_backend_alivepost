import prisma from "../../config/prisma";
import type { DiseaseCreateSchema } from "./disease.schema";

export async function CreateDisease(data: DiseaseCreateSchema) {
  const disease = await prisma.disease.create({
    data: {
      name: data.name,
      type: data.type,
      description: data.description
    }
  });

  return disease;
}