import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllConstructors = getAllRecords(db.constructor);

export const createConstructor = createRecord(db.constructor);
 
export const updateConstructor = updateRecord(db.constructor);

export const deleteConstructor = deleteRecord(db.constructor);