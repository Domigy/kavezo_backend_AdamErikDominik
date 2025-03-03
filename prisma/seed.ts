import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()
async function main() {
    for (let i = 0; i < 10; i++) {
        await prisma.koncert.create({
            data: {
                fellepo: faker.music.artist(),
                startTime: faker.date.future(),
                idotartam: faker.number.int({ min: 30, max: 120 }),
                elmarad: faker.number.float({min:0, max:1})>0.65?true:false
            },
        })
    }
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