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
// create types for every model
// generate some data ( use a data generator for this! )
// orrr, use a F1 api, transform the data then insert it into my DB