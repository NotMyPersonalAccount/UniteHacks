import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	console.log("hello")
	const shops = await prisma.coffeeShop.findMany()
	console.log(shops)
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
