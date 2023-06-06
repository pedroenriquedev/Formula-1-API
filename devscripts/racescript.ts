import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

type Race = {
    id?: string,
    seasonYear: number,
    round: number,
    circuitId: string,
    name: string,
    date: string,
    quali_date: string,
    sprint_date: string,
}

type RaceExternal = {
    season: string,
    round: string,
    url: string,
    raceName: string,
    Circuit: {
        circuitId: string,
        url: string,
        circuitName: string,
        location: object
    },
    date: string,
    time: string,
    FirstPractice: {
        date: string,
        time: string
    }
    SecondPractice: {
        date: string,
        time: string
    }
    ThirdPractice: {
        date: string,
        time: string
    }
    Qualifying: {
        date: string,
        time: string
    }
}

async function main() {
   
    const apiurl = 'http://ergast.com/api/f1/2023.json';

	const data = await fetch(apiurl);
	const dataJson = await data.json();

    const racesExternal: RaceExternal[] = dataJson.MRData.RaceTable.Races;

    const circuits = await prisma.circuit.findMany({});

    const races = racesExternal.map(race => {
        const circuit = circuits.find(circuits => circuits.name === race.Circuit.circuitName)
        
        const id = circuit?.id || 'none';

        return {
            seasonYear: parseInt(race.season), 
            round: parseInt(race.round),
            name: race.raceName,
            date: new Date(race.date+'T'+race.time),
            quali_date: new Date(race.Qualifying.date+'T'+race.Qualifying.time),
            circuitId: id
        }
    })
    
    const new_docs = await prisma.race.createMany({
        data: races
    })
    console.log(new_docs)
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
