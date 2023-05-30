import { db } from '../utils/db.server'
import { createRecord, deleteRecord, getAllRecords, updateRecord } from '../utils/handlerFactory'

export const getAllQualifying = getAllRecords(db.qualifying);

export const createQualifying = createRecord(db.qualifying);
 
export const updateQualifying = updateRecord(db.qualifying);

export const deleteQualifying = deleteRecord(db.qualifying);