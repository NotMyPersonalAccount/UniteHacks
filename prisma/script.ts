import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	console.log("makinh thing")
	await prisma.coffeeShop.create({
		data: {
			name: "fwiohweifh",
			address: "828128",
			imgUrl: "2382398923",
      description: "",
			quiet:   0,
			wifi:    1,
			outlets: 0,
			coffee:  9,
			tea:     0,
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
