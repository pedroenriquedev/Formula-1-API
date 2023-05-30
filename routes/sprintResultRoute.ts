import express from 'express'
import *  as sprintResultController from '../controllers/sprintResultController'

const router = express.Router()

router.route('/').get(sprintResultController.getAllSprintResults).post(sprintResultController.createSprintResults)

router.route('/:id').put(sprintResultController.updateSprintResults).delete(sprintResultController.deleteSprintResults)

export { router as sprintResultRoute};