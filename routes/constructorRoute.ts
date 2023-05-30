import express from 'express'
import *  as constructorController from '../controllers/constructorController'

const router = express.Router()

router.route('/').get(constructorController.getAllConstructors).post(constructorController.createConstructor)

router.route('/:id').put(constructorController.updateConstructor).delete(constructorController.deleteConstructor)

export { router as constructorRoute};