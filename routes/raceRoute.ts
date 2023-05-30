import express from 'express'
import *  as raceController from '../controllers/raceController'

const router = express.Router()

router.route('/').get(raceController.getAllRaces).post(raceController.createRace)

router.route('/:id').put(raceController.updateRace).delete(raceController.deleteRace)

export { router as raceRoute};