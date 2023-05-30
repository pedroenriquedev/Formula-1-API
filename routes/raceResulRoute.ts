import express from 'express'
import *  as raceResultController from '../controllers/raceResultController'

const router = express.Router()

router.route('/').get(raceResultController.getAllRaceResults).post(raceResultController.createRaceResult)

router.route('/:id').put(raceResultController.updateRaceResult).delete(raceResultController.deleteRaceResult)

export { router as raceResultRoute};