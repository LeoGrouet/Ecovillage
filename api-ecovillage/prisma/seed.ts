import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        firstname: 'Test',
        lastname: 'User',
        email: 'test@gmail.com',
        password: 'test123',
      },
      {
        id: 2,
        firstname: 'Ariel',
        lastname: 'Tombal',
        email: 'test@gmail.com',
        password: 'test123',
      },
}
