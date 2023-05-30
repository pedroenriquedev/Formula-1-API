import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllCircuits = getAllRecords(db.circuit);

export const createCircuit = createRecord(db.circuit);
 
export const updateCircuit = updateRecord(db.circuit);

export const deleteCircuit = deleteRecord(db.circuit);