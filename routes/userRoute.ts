import express from 'express'
import * as authController from '../controllers/authController'

const router = express.Router();

router.route('/').get(authController.restrictTo('admin'), authController.getAllUsers);

router.route('/:id').put(authController.restrictTo('admin'), authController.updateUser).delete(authController.restrictTo('admin'), authController.deleteUser)

export { router as userRoute};