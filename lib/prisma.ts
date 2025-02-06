// this file used to connect prisma to innges
import { PrismaClient } from "@prisma/client";

// export const db =globalThis.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//     globalThis.prisma = db;
// }
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const db = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
