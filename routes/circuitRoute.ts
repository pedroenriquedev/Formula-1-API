import express from 'express'
import *  as circuitController from '../controllers/circuitController'

const router = express.Router()

router.route('/').get(circuitController.getAllCircuits).post(circuitController.createCircuit)

router.route('/:id').put(circuitController.updateCircuit).delete(circuitController.deleteCircuit)

export { router as circuitRoute};