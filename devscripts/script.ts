import { PrismaClient } from '@prisma/client'
import { Team } from '../types/ModelTypes'
import { teamsData } from '../devdata/teams'

const prisma = new PrismaClient()

const teams = teamsData;

async function main(teams: Array<Team>) {
   
  const constructors = await prisma.constructor.findMany({
    select: {
      id: true,
      name: true,
    }
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