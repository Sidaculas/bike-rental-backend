import { Router } from 'express'
import { bikeController } from './bike.controller'
import validateRequest from '../../middlewares/validateRequest'
import { bikeValidations } from './bike.validations'

const router = Router()

router.post(
  '/',
  validateRequest(bikeValidations.bikeValidationSchema),
  bikeController.createBike,
)
router.get('/', bikeController.getAllBike)

router.put(
  '/:id',
  validateRequest(bikeValidations.updateBikeValidationSchema),
  bikeController.updateBike,
)

router.delete('/:id', bikeController.deleteBike)

export const bikeRoutes = router
