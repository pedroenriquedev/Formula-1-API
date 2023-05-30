import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllDrivers = getAllRecords(db.driver);

export const createDriver = createRecord(db.driver);
 
export const updateDriver = updateRecord(db.driver);

export const deleteDriver = deleteRecord(db.driver);