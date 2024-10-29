import { Router } from 'express'
import { bikeController } from './bike.controller'
import validateRequest from '../../middlewares/validateRequest'
import { bikeValidations } from './bike.validations'
import { Auth } from '../../middlewares/Auth'
import { userRole } from '../user/user.constants'

const router = Router()

router.post(
  '/',
  validateRequest(bikeValidations.bikeValidationSchema),
  Auth(userRole.admin),
  bikeController.createBike,
)
router.get('/', bikeController.getAllBike)

router.put(
  '/:id',
  validateRequest(bikeValidations.updateBikeValidationSchema),
  Auth(userRole.admin),
  bikeController.updateBike,
)

router.delete('/:id', Auth(userRole.admin), bikeController.deleteBike)

export const bikeRoutes = router
