import prisma from "../../config/prisma";
import { AppError } from "../../utils/AppError";
import type { DiseaseCreateSchema } from "./disease.schema";

export async function CreateDisease(data: DiseaseCreateSchema) {
  const disease = await prisma.disease.create({
    data: {
      name: data.name,
      type: data.type,
      description: data.description,
    },
  });

  return disease;
}

export async function DiseaseSearchService(value: string) {
  try {
    const diseases = await prisma.disease.findMany({
      where: {
        name: {
          contains: value,
          mode: "insensitive",
        },
      },
    });

    return diseases;
  } catch (error) {

    throw new AppError("Unexpected error while searching diseases", 500);
  }
}
