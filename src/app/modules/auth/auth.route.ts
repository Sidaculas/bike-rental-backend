import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { userValidations } from '../user/user.validation'
import { userController } from '../user/user.controller'
import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'

const router = Router()

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  userController.registerUser,
)
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
)

export const authRoutes = router
