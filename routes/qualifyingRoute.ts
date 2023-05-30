import express from 'express'
import *  as qualifyingController from '../controllers/qualifyingController'

const router = express.Router()

router.route('/').get(qualifyingController.getAllQualifying).post(qualifyingController.createQualifying)

router.route('/:id').put(qualifyingController.updateQualifying).delete(qualifyingController.deleteQualifying)

export { router as qualifyingRoute};