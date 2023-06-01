import { PrismaClient } from "@prisma/client"
import { Team } from '../types/ModelTypes'
const prisma = new PrismaClient();

type DriverU = {
    driverId: string,
    permanentNumber: string,
    code: string,
    url: string,
    givenName: string,
    familyName: string,
    dateOfBirth: string,
    nationality: string
}
const drivers_teams = [
    {name: 'albon', team: 'williams'},
    {name: 'alonso', team: 'aston'},
    {name: 'bottas', team: 'alfa'},
    {name: 'de vries', team: 'alphatauri'},
    {name: 'gasly', team: 'alpine'},
    {name: 'hamilton', team: 'mercedes'},
    {name: 'hülkenberg', team: 'haas'},
    {name: 'leclerc', team: 'ferrari'},
    {name: 'magnussen', team: 'haas'},
    {name: 'norris', team: 'mclaren'},
    {name: 'ocon', team: 'alpine'},
    {name: 'pérez', team: 'red bull'},
    {name: 'piastri', team: 'mclaren'},
    {name: 'russell', team: 'mercedes'},
    {name: 'sainz', team: 'ferrari'},
    {name: 'sargeant', team: 'williams'},
    {name: 'stroll', team: 'aston'},
    {name: 'tsunoda', team: 'alphatauri'},
    {name: 'verstappen', team: 'red bull'},
    {name: 'zhou', team: 'alfa'}
]

const sanitize_drivers = (unsanitized_drivers: Array<DriverU>, constructors: any) => {
    return unsanitized_drivers.map(driver => {
        const { team: current_team_string } = drivers_teams.find(el => el.name === driver.familyName.toLowerCase()) || {team: 'none'}
           
    
        const { id: current_team_id} = constructors.find((constructor: Team) => 
            constructor.name.startsWith(current_team_string)           )

        return {
            first_name: driver.givenName.toLowerCase(),
            last_name: driver.familyName.toLowerCase(),
            birthdate: new Date(driver.dateOfBirth),
            nationality: driver.nationality.toLowerCase(),
            current_team_id
        }
    })
}

async function main() {
   
    const constructors = await prisma.constructor.findMany({})

    const apiurl = 'http://ergast.com/api/f1/2023/drivers.json';

	const data = await fetch(apiurl);
	const dataJson = await data.json();

    const unsanitized_drivers = dataJson.MRData.DriverTable.Drivers

    const sanitized_drivers =  sanitize_drivers(unsanitized_drivers, constructors);

    const res = await prisma.driver.createMany({
        data: sanitized_drivers
    })

     console.log(res)
    
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
