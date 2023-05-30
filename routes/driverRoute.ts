import express from 'express'
import *  as driverController from '../controllers/driverController'

const router = express.Router()

router.route('/').get(driverController.getAllDrivers).post(driverController.createDriver)

router.route('/:id').put(driverController.updateDriver).delete(driverController.deleteDriver)

export { router as driverRoute};