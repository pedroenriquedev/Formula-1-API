import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllRaceResults = getAllRecords(db.raceResult);

export const createRaceResult = createRecord(db.raceResult);
 
export const updateRaceResult = updateRecord(db.raceResult);

export const deleteRaceResult = deleteRecord(db.raceResult);