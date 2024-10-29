import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { userValidations } from '../user/user.validation'

// import { AuthValidation } from './auth.validation'
import { AuthController } from './auth.controller'

const router = Router()

router.post(
  '/signup',
  validateRequest(userValidations.userValidationSchema),
  AuthController.register,
)
router.post(
  '/login',
  // validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login,
)

export const authRoutes = router
