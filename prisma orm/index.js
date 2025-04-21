const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
    const user = await prisma.user.create({
        data: {
            name: "navneet",
            email: "navneet@gmail.com"
        }
    });
    console.log(user);
};

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
