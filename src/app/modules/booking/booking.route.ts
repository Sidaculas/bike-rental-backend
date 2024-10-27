import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { bookingValidations } from './booking.validation'
import { bookingController } from './booking.controller'

const router = Router()

router.post(
  '/',
  validateRequest(bookingValidations.bookingValidationSchema),
  bookingController.createRental,
)
router.get('/')
router.put(
  '/:id/return',
  validateRequest(bookingValidations.updateBookingValidationSchema),
  bookingController.returnBike,
)

export const rentalRoutes = router
