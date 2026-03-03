import "dotenv/config";
import { PrismaClient } from "../../generated/prisma";

export const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
});