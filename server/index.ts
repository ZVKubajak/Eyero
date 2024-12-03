import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.user.create({
        data: {
            email: "bryce@gmail.com",
            password: "database",
            savedStocks: ["XRP", "Bitcoin", "Doge Coin"]
        }
    })
  
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
