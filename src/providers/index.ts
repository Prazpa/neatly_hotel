//test connection with prisma and suparbase 
// command "tsx index.ts"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData = {
  fullname: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
  password: "password123",
  id_number: "1234567890",
  dob: new Date("1990-01-01"),
  country: "USA",
  profile_pic: "link-to-profile-pic",
  card_number: "1234567812345678",
  card_owner: "John Doe",
  expiry_date: new Date("2025-01-01"),
  cvc: "123"
};

async function main() {
    await prisma.user.create({
      data: userData
    })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})