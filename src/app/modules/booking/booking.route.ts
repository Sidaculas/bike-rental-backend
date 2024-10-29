import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { bookingValidations } from './booking.validation'
import { bookingController } from './booking.controller'
import { Auth } from '../../middlewares/Auth'
import { userRole } from '../user/user.constants'

const router = Router()

router.post(
  '/',
  validateRequest(bookingValidations.bookingValidationSchema),

  bookingController.createRental,
)
router.get('/', bookingController.getAllRentals)
router.put(
  '/:id/return',
  validateRequest(bookingValidations.updateBookingValidationSchema),
  Auth(userRole.admin),
  bookingController.returnBike,
)

export const rentalRoutes = router
