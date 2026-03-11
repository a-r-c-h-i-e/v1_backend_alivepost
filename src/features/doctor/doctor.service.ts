import prisma from "../../config/prisma";

export const createDoctorService = async (
  name: string,
  username: string,
  hospitalId: number,
) => {
  const existingDoctor = await prisma.doctor.findUnique({
    where: { username },
  });

  if (existingDoctor) {
    throw new Error("Username already exists");
  }

  const doctor = await prisma.doctor.create({
    data: {
      name,
      username,
      hospitalId,
    },
  });

  return doctor;
};
