import * as ModelTypes from "../types/ModelTypes";

export const teamsData: Array<ModelTypes.Team> = [
    {
      name: 'red bull racing rbpt',
      is_active: true,
      country: 'england',   
    },
    {
        name: 'ferrari',
        is_active: true,
        country: 'italy',   
    },
    {
        name: 'mercedes',
        is_active: true,
        country: 'england',   
    },
    {
        name: 'alpine renault',
        is_active: true,
        country: 'england',   
    },
    {
        name: 'mclaren mercedes',
        is_active: true,
        country: 'england',   
    },
    {
        name: 'alfa romeo ferrari',
        is_active: true,
        country: 'switzerland',   
    },
    {
        name: 'aston martin aramco mercedes',
        is_active: true,
        country: 'england',   
    },
    {
        name: 'haas ferrari',
        is_active: true,
        country: 'usa',   
    },
    {
        name: 'alphatauri rbpt',
        is_active: true,
        country: 'italy',   
    },
    {
        name: 'williams mercedes',
        is_active: true,
        country: 'england',   
    }, 
]

// export const driversData: Array<ModelTypes.Driver> = [
//     {
//         first_name: 'alexander',
//         last_name: 'albon',
//         birthdate: '1996-03-23',
//         nationality: 'thailand',
//         current_team_id: 'af212110-6f1c-4e27-9821-4239c3c0436a'
//     },
//     {
//         first_name: 'fernando',
//         last_name: 'alonso',
//         birthdate: '1981-07-29',
//         nationality: 'spain',
//         current_team_id: '5d3c0fb6-2a31-4654-91dd-145908901310'
//     },
//     {
//         first_name: 'valtteri',
//         last_name: 'bottas',
//         birthdate: '1989-08-28',
//         nationality: 'finland',
//         current_team_id: 'dceeccbf-c70a-42ef-8e4a-ab25a123056f'
//     },
//     {
//         first_name: 'nyck',
//         last_name: 'de vries',
//         birthdate: '1995-02-06',
//         nationality: 'netherlands',
//         current_team_id: 'f132e578-b759-43c2-944e-37a5b4677655'
//     },
//     {
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "hamilton",
//         "permanentNumber": "44",
//         "code": "HAM",
//         "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
//         "givenName": "Lewis",
//         "familyName": "Hamilton",
//         "dateOfBirth": "1985-01-07",
//         "nationality": "British"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "hulkenberg",
//         "permanentNumber": "27",
//         "code": "HUL",
//         "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
//         "givenName": "Nico",
//         "familyName": "Hülkenberg",
//         "dateOfBirth": "1987-08-19",
//         "nationality": "German"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "leclerc",
//         "permanentNumber": "16",
//         "code": "LEC",
//         "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
//         "givenName": "Charles",
//         "familyName": "Leclerc",
//         "dateOfBirth": "1997-10-16",
//         "nationality": "Monegasque"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "kevin_magnussen",
//         "permanentNumber": "20",
//         "code": "MAG",
//         "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
//         "givenName": "Kevin",
//         "familyName": "Magnussen",
//         "dateOfBirth": "1992-10-05",
//         "nationality": "Danish"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "norris",
//         "permanentNumber": "4",
//         "code": "NOR",
//         "url": "http://en.wikipedia.org/wiki/Lando_Norris",
//         "givenName": "Lando",
//         "familyName": "Norris",
//         "dateOfBirth": "1999-11-13",
//         "nationality": "British"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "ocon",
//         "permanentNumber": "31",
//         "code": "OCO",
//         "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
//         "givenName": "Esteban",
//         "familyName": "Ocon",
//         "dateOfBirth": "1996-09-17",
//         "nationality": "French"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "perez",
//         "permanentNumber": "11",
//         "code": "PER",
//         "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
//         "givenName": "Sergio",
//         "familyName": "Pérez",
//         "dateOfBirth": "1990-01-26",
//         "nationality": "Mexican"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "piastri",
//         "permanentNumber": "81",
//         "code": "PIA",
//         "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
//         "givenName": "Oscar",
//         "familyName": "Piastri",
//         "dateOfBirth": "2001-04-06",
//         "nationality": "Australian"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "russell",
//         "permanentNumber": "63",
//         "code": "RUS",
//         "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
//         "givenName": "George",
//         "familyName": "Russell",
//         "dateOfBirth": "1998-02-15",
//         "nationality": "British"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "sainz",
//         "permanentNumber": "55",
//         "code": "SAI",
//         "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
//         "givenName": "Carlos",
//         "familyName": "Sainz",
//         "dateOfBirth": "1994-09-01",
//         "nationality": "Spanish"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "sargeant",
//         "permanentNumber": "2",
//         "code": "SAR",
//         "url": "http://en.wikipedia.org/wiki/Logan_Sargeant",
//         "givenName": "Logan",
//         "familyName": "Sargeant",
//         "dateOfBirth": "2000-12-31",
//         "nationality": "American"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "stroll",
//         "permanentNumber": "18",
//         "code": "STR",
//         "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
//         "givenName": "Lance",
//         "familyName": "Stroll",
//         "dateOfBirth": "1998-10-29",
//         "nationality": "Canadian"
//         first_name: 'pierre',
//         last_name: 'gasly',
//         birthdate: '1996-02-07',
//         nationality: 'france',
//         current_team_id: '6cbd245c-1a77-41b5-b5a5-ddeb92eee3eb'
//     },
//     {
//         "driverId": "tsunoda",
//         "permanentNumber": "22",
//         "code": "TSU",
//         "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
//         "givenName": "Yuki",
//         "familyName": "Tsunoda",
//         "dateOfBirth": "2000-05-11",
//         "nationality": "Japanese"
//     },
//     {
//         "driverId": "max_verstappen",
//         "permanentNumber": "33",
//         "code": "VER",
//         "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
//         "givenName": "Max",
//         "familyName": "Verstappen",
//         "dateOfBirth": "1997-09-30",
//         "nationality": "Dutch"
//     },
//     {
//         "driverId": "zhou",
//         "permanentNumber": "24",
//         "code": "ZHO",
//         "url": "http://en.wikipedia.org/wiki/Guanyu_Zhou",
//         "givenName": "Guanyu",
//         "familyName": "Zhou",
//         "dateOfBirth": "1999-05-30",
//         "nationality": "Chinese"
//     }
// ]
// create types for every model
// generate some data ( use a data generator for this! )
// orrr, use a F1 api, transform the data then insert it into my DB