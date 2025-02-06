// globals.d.ts
import { PrismaClient } from "@prisma/client";

// Declare the global variable 'prisma' to avoid implicit 'any' error.
declare global {
  var prisma: PrismaClient | undefined;
}

export {};
