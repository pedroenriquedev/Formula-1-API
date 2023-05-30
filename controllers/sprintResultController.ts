import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllSprintResults = getAllRecords(db.sprintResult);

export const createSprintResults = createRecord(db.sprintResult);
 
export const updateSprintResults = updateRecord(db.sprintResult);

export const deleteSprintResults = deleteRecord(db.sprintResult);