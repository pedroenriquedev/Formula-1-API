import { PrismaClient } from '@prisma/client'
import { Team } from './types/ModelTypes'
import { teamsData } from './devdata/teams'

const prisma = new PrismaClient()

// async function main() {
//   const team = await prisma.constructor.create({
//     data: {
//       name: 'red bull racing rbpt',
//       is_active: true,
//       country: 'England',   
//     },
//   })
//   console.log(team)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

const teams = teamsData;

async function main(teams: Array<Team>) {
   
  const constructors = await prisma.constructor.createMany({
    data: teams
  })
  
  console.log(constructors)
}

main(teams)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })