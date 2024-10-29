import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { userValidations } from './user.validation'
import { userController } from './user.controller'
import { Auth } from '../../middlewares/Auth'
import { userRole } from './user.constants'
// import { userController } from './user.controller'

const router = Router()

router.post(
  '/create-admin',
  validateRequest(userValidations.userValidationSchema),
  Auth(userRole.admin),
  userController.createAdmin,
)

router.get('/me', userController.getUser)
// router.get('/', userController.findUser)
router.put(
  '/me',
  validateRequest(userValidations.updateUserValidationSchema),
  userController.updateUser,
)

export const userRoutes = router
