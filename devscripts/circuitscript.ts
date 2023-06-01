import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

type CircuitExternal = {
    circuitId: string,
    url: string,
    circuitName: string,
    Location: {
      lat: string,
      long: string,
      locality: string,
      country: string
    }
}

async function main() {
   
    const apiurl = 'http://ergast.com/api/f1/2023/circuits.json';

	const data = await fetch(apiurl);
	const dataJson = await data.json();

    const circuits_external: CircuitExternal[] = dataJson.MRData.CircuitTable.Circuits;
    const circuits = circuits_external.map(circuit => {
        return {
            name: circuit.circuitName,
            city: circuit.Location.locality,
            country: circuit.Location.country
        }
    })
    
    const new_DB_circuits = await prisma.circuit.createMany({
        data: circuits
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
