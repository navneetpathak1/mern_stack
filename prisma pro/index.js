const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const main = async () => {
    // ! single data
    // const user = await prisma.user.create({
    //     data: {
    //         email: "navneetpathak@gmail.com",
    //         name: "navneet"
    //     }
    // });
    // console.log(user);

    // ! multiple data
    // const newUser = await prisma.user.createMany({
    //     data: [
    //         {email: "navneetpathak134@gmail.com",name: "navneet"},
    //         {email: "navneetpathak125@gmail.com",name: "navneet"}
    //     ],
    //     skipDuplicates: true
    // })
    // console.log(newUser);
    // ! get all users
    // const user = await prisma.user.findMany();
    // console.log(user);

    // ! 
    // const user = await prisma.user.findUnique({
    //     where: {id : 1},
    // })
    // console.log(user);
    // ! update

    // const updatedUser = await prisma.user.update({
    //     where: {id: 1},
    //     data: {name:"navneet pathak"}
    // })
    // console.log(updatedUser);

    // const updatedUser = await prisma.user.updateMany({
    //     where: {id: 3},
    //     data: {name:"navneet pathak"}
    // })
    // console.log(updatedUser);

    // ! detele

    const deleteUsers = await prisma.user.deleteMany({
        where: {
          id: {
            in: [1, 3] // Deletes users with id 1 and 3
          }
        }
      });
      
      console.log(deleteUsers);
      
    
};

main()
    .catch((e) => console.log(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
