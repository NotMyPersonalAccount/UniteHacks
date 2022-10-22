// OOOO I LOVE PASTING WOOOOOO

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	console.log("makinh thing")
	await prisma.coffeeShop.create({
		data: {
			name: "CRAAAAAAAAAAAAAZY SHOP",
			address: "j street 3",
			imgUrl: "pig",
			quiet: 8,
			wifi: 3,
			outlets: 7,
			coffee: 2,
			tea: 2,
		}
	})
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
