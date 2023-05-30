import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllRaces = getAllRecords(db.race);

export const createRace = createRecord(db.race);
 
export const updateRace = updateRecord(db.race);

export const deleteRace = deleteRecord(db.race);